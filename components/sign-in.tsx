"use client";

import { signIn, signOut } from "next-auth/react";

export function SignInButton() {
  return (
    <>
      <button
        className="border-gray-200 bg-zinc-400 p-2 m-2 rounded-sm hover:bg-zinc-300"
        onClick={() => signIn()}
      >
        Sign in
      </button>

      <button
        className="border-gray-200 bg-zinc-400 p-2 m-2 rounded-sm hover:bg-zinc-300"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </>
  );
}
