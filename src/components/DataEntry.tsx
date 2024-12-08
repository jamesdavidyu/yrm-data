"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";
import { useState } from "react";

export const DataEntry = () => {
  const [index, setIndex] = useState<number>(1);

  return (
    <div className="flex flex-col space-y-4">
      {/* TODO: turn into data entry line component */}
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div>
          <Label htmlFor="test">Test</Label>
          <Input id="test" />
        </div>
        <div>
          <Label htmlFor="test2">Test 2</Label>
          <Input id="test2" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          className="w-fit p-2"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <PlusIcon />
        </Button>
      </div>
      <Button>Submit</Button>
    </div>
  );
};
