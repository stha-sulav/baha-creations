import { serverEnv } from '@/env';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle({connection: serverEnv.DATABASE_URL, casing: 'snake_case'});