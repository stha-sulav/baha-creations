import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { eq } from "drizzle-orm";
import { db } from "@/drizzle/drizzle";
import * as schema from "@/drizzle/schemas";
import { user as users } from "@/drizzle/schemas/auth";
import { serverEnv } from "@/env";

export const auth = betterAuth({
  baseURL: serverEnv.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    },
  },
  callbacks: {
    async signIn({ user }: { user: { email: string } }) {
      const allowedUser = await db.query.user.findFirst({
        where: eq(users.email, user.email),
      });

      return !!allowedUser;
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds (5 minutes)
    },
  },
  plugins: [nextCookies()],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
});
