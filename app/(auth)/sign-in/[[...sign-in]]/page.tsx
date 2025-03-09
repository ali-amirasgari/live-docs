"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function SignInPage() {
  // const { isSignedIn } = useUser();

  // if (isSignedIn) {
  //   return redirect("/");
  // }

  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
}

export default SignInPage;
