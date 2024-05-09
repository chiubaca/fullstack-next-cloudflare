import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";

import { auth } from "@/auth";
import { SignInButton } from "@/components/sign-in";
import { todo } from "@/schemas";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

const DB = getRequestContext().env.APP_DB;
const db = drizzle(DB);

export default async function Home() {
  const session = await auth();

  const todos = await db.select().from(todo);

  async function addTodo(formData: FormData) {
    "use server";

    try {
      const formTodo = formData.get("todo") as string;

      await db.insert(todo).values({ text: formTodo, timestamp: Date.now() });
      // .returning();

      revalidatePath("/posts");
    } catch (error) {
      console.warn("Unhandled error!", error);
    }
  }

  return (
    <main>
      <SignInButton />

      {session ? <>Hello {session?.user?.name}</> : <> You are signed out</>}

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
