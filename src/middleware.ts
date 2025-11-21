// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(request: NextRequest) {
  return NextResponse.next();
});

export const config = {};
// matcher: ["/"],
//matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
