// src/types/next-auth.d.ts

import { Account, Role } from "@/_lib/prisma";

declare module "next-auth" {
  interface User extends Omit<Account, "password"> {
    id: string; // NextAuth が必須とするプロパティ
    role: Role; // Account.role と一致させる
  }

  interface Session {
    user: Account;
  }
}
