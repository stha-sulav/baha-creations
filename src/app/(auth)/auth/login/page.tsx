"use client";

import { Button } from "@/feat/shared/components/ui/button";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const signInWithGoogle = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Button
          variant="outline"
          type="button"
          onClick={signInWithGoogle}
          size={"lg"}
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
}
