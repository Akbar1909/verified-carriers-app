import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      token: string;
      email: string;
      registrationStatus: string;
    };
  }

  interface User {
    id: string;
    role: string;
    token: string;
    email: string;
    registrationStatus: string;
  }
}
