import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { CustomMiddleware } from "./chain";
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

    console.log({isAuthenticated, pathname, role, registrationStatus})

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
    if (
      isAuthenticated &&
      pathname === "/auth/login" &&
      session?.role === "company" &&
      registrationStatus === "COMPLETE"
    ) {
      return NextResponse.redirect(new URL("/business", baseUrl));
    }

    if (
      isAuthenticated &&
      role === "company" &&
      pathname === "/auth/login" &&
      registrationStatus === "INITIAL"
    ) {
      return NextResponse.redirect(
        new URL("/dashboard/company/complete-profile", baseUrl)
      );
    }

    return middleware(req, event, response);
  };
}
