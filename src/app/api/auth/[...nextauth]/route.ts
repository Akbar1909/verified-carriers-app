// pages/api/auth/[...nextauth].js
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    // User Login Provider
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "text" },
        role: { label: "Mode", type: "text" },
      },
      async authorize(credentials) {
        const { email, password, role } = credentials;
        try {
          // Make a request to your standalone backend API
          const response = await fetch(
            role === "user"
              ? `${process.env.NEXT_PUBLIC_API_URL}/auth/login`
              : role === "moderator"
              ? `${process.env.NEXT_PUBLIC_API_URL}/auth/moderator/login`
              : `${process.env.NEXT_PUBLIC_API_URL}/auth/company/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Authentication failed");
          }

          // Return the user object with role to be saved in the JWT
          return {
            token: data?.token,
            ...data?.moderator,
            ...data?.company,
            ...data?.user, // Assuming your API returns a 'user' object
            role, // Add the role
          };
        } catch (error) {
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to the token when signing in

      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.token = user?.token;
        token.email = user.email;
        token.registrationStatus = user.registrationStatus;
        // Add any other user/company data you need
      }
      return token;
    },
    async session({ session, token }) {
      // Make sure EVERY property is explicitly copied

      session.id = token.id;
      session.role = token.role;
      session.token = token.token;
      session.email = token.email;
      session.registrationStatus = token.registrationStatus;

      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    error: "/auth/error", // Custom error page
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
