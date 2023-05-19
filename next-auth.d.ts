import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      sessionToken?: string
    } & DefaultSession['user']
  }
}
