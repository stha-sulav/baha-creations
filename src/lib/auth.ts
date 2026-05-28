import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/drizzle/drizzle";
import { serverEnv } from "@/env";
import * as schema from "@/drizzle/schemas";

export const auth = betterAuth({
  baseURL: serverEnv.BETTER_AUTH_URL, 
    socialProviders: {
        google: { 
            clientId: serverEnv.GOOGLE_CLIENT_ID, 
            clientSecret: serverEnv.GOOGLE_CLIENT_SECRET, 
        }, 
    },
  emailAndPassword: {
    enabled: true,
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
    schema
  }),
});
