import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// 外部 Auth Worker URL
const NEXTAUTH_URL = "https://minithing-auth.minithing19811026.workers.dev";
const NEXTAUTH_SECRET = "openclaw-auth-secret-key-2026-march-28";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  // 指向外部 Workers
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  trustHost: true,
});
