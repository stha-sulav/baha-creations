import { drizzle } from "drizzle-orm/node-postgres";
import { serverEnv } from "@/env";
import * as schema from "./schemas";

export const db = drizzle({
  connection: serverEnv.DATABASE_URL,
  casing: "snake_case",
  schema,
});
