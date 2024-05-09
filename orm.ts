import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";

const APP_DB = getRequestContext().env.APP_DB;
export const db = drizzle(APP_DB);