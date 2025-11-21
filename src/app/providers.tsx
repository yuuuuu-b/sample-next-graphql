"use client";
import { ReactNode } from "react";
import { Provider as UrqlProvider, createClient, fetchExchange } from "urql";
import { SessionProvider, useSession } from "next-auth/react";

function UrqlProviderWithSession({ children }: { children: ReactNode }) {
  const { data: session } = useSession();

  const client = createClient({
    url: "/api/graphql",
    requestPolicy: "network-only",
    fetchOptions: () => {
      return {
        headers: {
          Authorization: `Bearer ${session?.user.accountId}`, // NextAuth の JWT など
        },
      };
    },
    exchanges: [fetchExchange],
    preferGetMethod: false,
  });

  return <UrqlProvider value={client}>{children}</UrqlProvider>;
}

//全体で使う Providers
export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider basePath="/api/auth">
      <UrqlProviderWithSession>{children}</UrqlProviderWithSession>
    </SessionProvider>
  );
}
