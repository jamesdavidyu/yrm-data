"use client";

import { Button } from "./ui/button";
import {
  CalendarIcon,
  CaretDownIcon,
  ClockIcon,
  HomeIcon,
  MinusIcon,
  PaperPlaneIcon,
  Pencil2Icon,
  PersonIcon,
  PlusIcon,
  QuestionMarkIcon,
} from "@radix-ui/react-icons";
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
import { z } from "zod";
import { darkModeButton, daysOfWeek, lightModeButton } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { RecursiveSuggestion } from "./RecursiveSuggestion";

// const schema = z.object({
//   groups: z.array(
//     z.object({
//       id: z.string().uuid(),
//       date: z.date().nonempty()
//     })
//   )
// });

export interface DataEntryProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const DataEntry = ({ darkMode, setDarkMode }: DataEntryProps) => {
  const [index, setIndex] = useState<number>(1);
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState<string>();
  // TODO: const categories = useCategory();
  const [categoryOpen, setCategoryOpen] = useState<boolean>();
  const [categoryValue, setCategoryValue] = useState("");

  // TODO: change all dynamic screen sizes from sm: to lg:

  return (
    <div className="flex flex-col space-y-2 w-full lg:w-fit px-8 lg:px-0">
      <div className="flex justify-end items-center pl-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className={
                darkMode ? "text-white hidden sm:block" : "hidden sm:block"
              }
            >
              Need more fields?
            </Button>
          </DialogTrigger>
          <DialogContent className={darkMode ? "bg-black text-white" : ""}>
            <DialogTitle>Need more fields?</DialogTitle>
            <p>
              Suggest some fields you would like added to your selections below.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className={darkMode ? darkModeButton : lightModeButton}
                  >
                    Date
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar />
                </PopoverContent>
              </Popover>
              <Input placeholder="Name" />
              <Input placeholder="Category" />
              <Input placeholder="Note" />
              <Select>
                <SelectTrigger>Hours</SelectTrigger>
                <SelectContent>Test</SelectContent>
              </Select>
            </div>
            <div className="flex space-x-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-500">
                <PaperPlaneIcon />
                Submit
              </Button>
              <RecursiveSuggestion
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full sm:w-fit p-2 text-black bg-yellow-300 hover:bg-yellow-200"
              title="Need more fields?"
            >
              <p className="block sm:hidden">Need more fields?</p>
              <QuestionMarkIcon className="hidden sm:block" />
            </Button>
          </DialogTrigger>
          <DialogContent className={darkMode ? "bg-black text-white" : ""}>
            <DialogTitle>Need more fields?</DialogTitle>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col lg:flex-row space-x-2 space-y-2 lg:space-y-0">
        {/* TODO: this is going to update all of them, need to figure out how to update each row */}
        <div className="flex items-center justify-center">{index}</div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={
                  darkMode
                    ? "border bg-black w-full font-normal"
                    : "border bg-white text-black w-full hover:cursor-pointer hover:bg-white font-normal"
                }
              >
                <CalendarIcon />
                {date
                  ? daysOfWeek[date.getDay()] +
                    " " +
                    String(date.getMonth() + 1) +
                    "/" +
                    String(date.getDate() + "/" + String(date.getFullYear()))
                  : "Date"}
                <CaretDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Select>
            <SelectTrigger className="flex justify-center items-center">
              <PersonIcon />
              &nbsp;
              <SelectValue placeholder="Name" />
              <CaretDownIcon />
            </SelectTrigger>
            <SelectContent className="w-fit">
              <SelectItem value="Lou Vinciguerra">Lou</SelectItem>
              <SelectItem value="Hassan Adams">Hassan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Popover open={categoryOpen}>
            <PopoverTrigger asChild>
              <Button
                className={darkMode ? darkModeButton : lightModeButton}
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                <HomeIcon />
                {/* {categoryValue
                  ? categories.find(
                      (category) => category.value === categoryValue
                    )?.label
                  : "Category"} */}
                Category
                <CaretDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Command>
                <CommandInput placeholder="Search categories..." />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {/* {categories.map((category) => (
                      <CommandItem
                        key={category.value}
                        value={category.value}
                        onSelect={(currentValue) => {
                          setCategoryValue(
                            currentValue === categoryValue ? "" : currentValue
                          );
                          setCategoryOpen(!categoryOpen);
                        }}
                      >
                        {category.label}
                      </CommandItem>
                    ))} */}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Select>
            <SelectTrigger className="flex justify-center">
              <Pencil2Icon />
              &nbsp;
              <SelectValue placeholder="Notes" />
              <CaretDownIcon />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="test">Test</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          {/* TODO: convert into comboboxes */}
          <Select>
            <SelectTrigger className="flex justify-center">
              <ClockIcon />
              &nbsp;
              <SelectValue placeholder="Hours" />
              <CaretDownIcon />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0.25">0.25</SelectItem>
              <SelectItem value="0.5">0.5</SelectItem>
              <SelectItem value="0.75">0.75</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1.25">1.25</SelectItem>
              <SelectItem value="1.5">1.5</SelectItem>
              <SelectItem value="1.75">1.75</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="2.25">2.25</SelectItem>
              <SelectItem value="2.5">2.5</SelectItem>
              <SelectItem value="2.75">2.75</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="3.25">3.25</SelectItem>
              <SelectItem value="3.5">3.5</SelectItem>
              <SelectItem value="3.75">3.75</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button
            title="Delete row"
            className="w-full sm:w-fit p-2"
            variant="destructive"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            <MinusIcon />
          </Button>
        </div>
      </div>
      <div className="flex justify-end pl-2">
        <Button
          title="Add row"
          className="w-full sm:w-fit p-2 bg-blue-500 hover:bg-blue-400"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <PlusIcon />
        </Button>
      </div>
      <Button className="ml-2">
        <PaperPlaneIcon />
        Submit
      </Button>
    </div>
  );
};
