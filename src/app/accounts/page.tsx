"use client";

import { useAccountsQuery } from "@/_lib/graphql/generated";

function Products() {
  const [result] = useAccountsQuery();

  if (result.fetching) return <p>Loading...</p>;
  return (
    <ul>
      {result?.data?.accounts?.map((p) => (
        <li key={p.accountId}>{p.accountName}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return <Products />;
}
