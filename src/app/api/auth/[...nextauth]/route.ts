import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { accountRepository } from "@/_lib/repository/accountRepository";
import bcrypt from "bcrypt";
import { Role } from "@/_lib/graphql/generated";

export const authOptions: NextAuthOptions = {
  debug: false,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30日間
  },
  providers: [
    CredentialsProvider({
      name: "Login with AccountCode",
      credentials: {
        accountCode: { label: "AccountCode", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.accountCode || !credentials?.password) return null;

        // DBからユーザーを取得
        const account = await accountRepository.findByAccountCode(
          credentials.accountCode
        );

        if (!account || !account?.password) return null;

        // パスワード比較
        const isValid = await bcrypt.compare(
          credentials.password,
          account.password
        );
        if (!isValid) return null;

        // 認証成功時に返すオブジェクト
        return {
          ...account,
          id: account.accountId,
          role: account.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accountId = token.id as string;
        session.user.role = token.role as Role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
