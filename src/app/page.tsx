"use client";

import { DataEntry } from "@/components/DataEntry";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="h-screen bg-black text-white">
      <main className="flex h-[90%] items-center justify-center">
        {session ? (
          <DataEntry />
        ) : (
          <Button onClick={() => signIn("google")}>Login</Button>
        )}
      </main>
      <footer className="flex h-[10%] justify-end pr-8">
        {session ? (
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage
                  src={session ? String(session?.user?.image) : undefined}
                  className="hover:cursor-pointer"
                />
                <AvatarFallback className="text-black">
                  {Array.from(String(session?.user?.name))[0]}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="bg-black border-slate-600 w-fit p-1">
              <Button onClick={() => signOut()}>Sign Out</Button>
            </PopoverContent>
          </Popover>
        ) : null}
      </footer>
    </div>
  );
}
