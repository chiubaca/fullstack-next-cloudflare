import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";

export const makeDB = () => {
  const DB = getRequestContext().env.DB;

  const db = drizzle(DB);
  console.log("🚀 ~ db:", db);
  return db;
};
