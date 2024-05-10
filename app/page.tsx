// import { drizzle } from "drizzle-orm/d1";
// import { getRequestContext } from "@cloudflare/next-on-pages";

import { todo } from "@/schemas";

export const runtime = "edge";

export default async function Home() {
  // const APP_DB = getRequestContext().env.APP_DB;
  // const db = drizzle(APP_DB);

  // const todos = await db.select().from(todo);

  const todos = [{ text: "test" }, { text: "test2" }];

  async function addTodo(formData: FormData) {
    "use server";
    // const APP_DB = getRequestContext().env.APP_DB;
    // const db = drizzle(APP_DB);

    try {
      const formTodo = formData.get("todo") as string;
      console.log("🚀 ~ Home ~ formTodo:", formTodo);

      // await db.insert(todo).values({ text: formTodo, timestamp: Date.now() });
      return formTodo;
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
      {todos.map((todo, idx) => (
        <div key={idx}>{todo.text}</div>
      ))}
    </main>
  );
}
