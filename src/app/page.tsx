"use client";

import { DataEntry } from "@/components/DataEntry";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      {session ? (
        <DataEntry />
      ) : (
        <Button onClick={() => signIn("google")}>Login</Button>
      )}
    </main>
  );
}
