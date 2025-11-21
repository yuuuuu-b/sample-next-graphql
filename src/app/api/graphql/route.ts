import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import { graphqlResolvers } from "./resolvers";
export const runtime = "nodejs";

const typeDefs = readFileSync(
  path.join(process.cwd(), "src/app/api/graphql/schema.graphql"),
  "utf8"
);

// Apollo Server インスタンス
const server = new ApolloServer({
  typeDefs,
  resolvers: graphqlResolvers,
});

// Next.js App Router 用の handler
const handler = startServerAndCreateNextHandler<NextRequest>(server);

// GET/POST 両方をハンドル
export { handler as GET, handler as POST };
