import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { CustomMiddleware } from "./chain";
import { cookies } from "next/headers";
import { getToken } from "next-auth/jwt";

export function authMiddleware(middleware: CustomMiddleware) {
  return async function (
    req: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) {
    // Check for session token
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const pathname = req.nextUrl.pathname;
    const isAuthenticated = Boolean(session?.token);
    const registrationStatus = session?.registrationStatus as
      | "COMPLETE"
      | "INITIAL";
    const role = session?.role as "user" | "company";
    const baseUrl = `${req.nextUrl.protocol}/${req.nextUrl.host}`;

    if (
      isAuthenticated &&
      pathname === "/auth/login" &&
      session?.role === "user" &&
      registrationStatus === "COMPLETE"
    ) {
      return NextResponse.redirect(new URL("/", baseUrl));
    }

    if (
      isAuthenticated &&
      role === "user" &&
      pathname === "/auth/login" &&
      registrationStatus === "INITIAL"
    ) {
      return NextResponse.redirect(
        new URL("/dashboard/user/complete-profile", baseUrl)
      );
    }

    return middleware(req, event, response);
  };
}
