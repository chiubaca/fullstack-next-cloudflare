import { auth } from "@/auth";
import { SignInButton } from "@/components/sign-in";

export const runtime = "edge";

export default async function Home() {
  const session = await auth();

  return (
    <main className="">
      <SignInButton />

      {session ? <>Hello {session?.user?.name}</> : <> You are signed out</>}
    </main>
  );
}
