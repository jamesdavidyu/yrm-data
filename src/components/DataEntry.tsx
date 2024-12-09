"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CalendarIcon, PlusIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";

export const DataEntry = () => {
  const [index, setIndex] = useState<number>(1);

  return (
    <div className="flex flex-col space-y-4">
      {/* TODO: turn into data entry line component */}
      <div className="flex space-x-2">
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="border bg-black w-full">
                <CalendarIcon />
                Date
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Name" />
            </SelectTrigger>
            <SelectContent className="w-fit">
              <SelectItem value="Lou Vinciguerra">Lou</SelectItem>
              <SelectItem value="Hassan Adams">Hassan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="test">Test</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Notes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="test">Test</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Hours" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0.25">0.25</SelectItem>
              <SelectItem value="0.5">0.5</SelectItem>
              <SelectItem value="0.75">0.75</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1.25">1.25</SelectItem>
              <SelectItem value="1.5">1.5</SelectItem>
              <SelectItem value="1.75">1.75</SelectItem>
              <SelectItem value="1">1</SelectItem>
            </SelectContent>
          </Select>
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
