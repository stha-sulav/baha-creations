import { defineConfig } from "drizzle-kit";
import { serverEnv } from "@/env";

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schemas/**/*.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
});
