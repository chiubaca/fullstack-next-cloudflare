import { drizzle } from "drizzle-orm/d1";
import { revalidatePath } from "next/cache";
import { getRequestContext } from "@cloudflare/next-on-pages";

import { todo } from "@/schemas";

export const runtime = "edge";

export default async function Home() {
  const APP_DB = getRequestContext().env.APP_DB;
  const db = drizzle(APP_DB);

  const todos = await db.select().from(todo);

  async function addTodo(formData: FormData) {
    "use server";

    try {
      const formTodo = formData.get("todo") as string;

      await db.insert(todo).values({ text: formTodo, timestamp: Date.now() });
    } catch (error) {
      console.warn("Unhandled error...", error);
    }
  }

  return (
    <main>
      <form action={addTodo}>
        <input name="todo" type="text" />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </main>
  );
}
