"use client";

import { signIn, signOut } from "next-auth/react";

export function SignInButton() {
  return (
    <>
      <button className="btn" onClick={() => signIn()}>
        Sign in
      </button>

      <button className="btn btn-neutral" onClick={() => signOut()}>
        Sign Out
      </button>
    </>
  );
}
