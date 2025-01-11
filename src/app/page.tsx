"use client";

import { DataEntry } from "@/components/DataEntry";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowRightIcon,
  BarChartIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  // TODO: need to put darkMode in user's settings in database
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div
      className={
        darkMode
          ? "h-screen bg-black text-white"
          : "h-screen bg-white text-black"
      }
    >
      <header className="flex h-[10%] justify-center pt-8">
        {session ? (
          <Button>
            <BarChartIcon />
            Dashboard <ArrowRightIcon />
          </Button>
        ) : null}
      </header>
      <main className="flex h-[80%] items-center justify-center overflow-auto">
        {session ? (
          <DataEntry darkMode={darkMode} setDarkMode={setDarkMode} />
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
                  src={session ? session?.user?.image?.toString() : undefined}
                  className="hover:cursor-pointer"
                />
                <AvatarFallback className="text-black">
                  {Array.from(String(session?.user?.name))[0]}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent
              className={
                darkMode
                  ? "bg-black border-slate-600 w-fit p-3 space-y-3"
                  : "bg-white w-fit p-3 space-y-3"
              }
            >
              <div className="flex justify-center">
                {darkMode ? (
                  <SunIcon
                    style={{ color: "yellow" }}
                    className="size-6 hover:cursor-pointer"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                ) : (
                  <MoonIcon
                    className="size-6 hover:cursor-pointer"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                )}
              </div>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </PopoverContent>
          </Popover>
        ) : null}
      </footer>
    </div>
  );
}
