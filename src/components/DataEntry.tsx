import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export const DataEntry = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
