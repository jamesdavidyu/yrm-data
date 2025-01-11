"use client";

import { Button } from "./ui/button";
import {
  CalendarIcon,
  CaretDownIcon,
  CheckIcon,
  ClockIcon,
  HomeIcon,
  MinusIcon,
  PaperPlaneIcon,
  Pencil2Icon,
  PersonIcon,
  PlusIcon,
  QuestionMarkIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { useCallback, useState } from "react";
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
import { useHours } from "@/hooks/useHours";

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

interface Records {
  id: string;
  name: string | null;
  category: string | null;
  note: string | null;
  hours: number | null;
}

interface Hours {
  id: string;
  hour_value: number;
  hour_label: string;
  inputAt: Date;
}

export const DataEntry = ({ darkMode, setDarkMode }: DataEntryProps) => {
  const [rows, setRows] = useState<Records[]>([
    {
      id: crypto.randomUUID(),
      name: null,
      category: null,
      note: null,
      hours: null,
    },
  ]);
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState<string>();
  // TODO: const categories = useCategory();
  const [categoryOpen, setCategoryOpen] = useState<boolean>();
  const [hoursOpen, setHoursOpen] = useState<boolean>();
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [hourValue, setHourValue] = useState<number>();
  // TODO: need to figure out how to make sure this always gets fetched without having to relogin?
  const { hours } = useHours();

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: crypto.randomUUID(),
        name: null,
        category: null,
        note: null,
        hours: null,
      },
    ]);
  };

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
      {rows.map((row, index) => (
        <div
          key={row.id}
          className="flex flex-col lg:grid lg:grid-cols-7 space-x-2 space-y-2 lg:space-y-0"
        >
          {/* TODO: this is going to update all of them, need to figure out how to update each row */}
          <div className="flex items-center justify-end">{index}</div>
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
              <PopoverContent className="bg-black">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="text-white"
                />
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
            <Popover>
              <PopoverTrigger className="flex justify-center" asChild>
                <Button className={darkMode ? darkModeButton : lightModeButton}>
                  <Pencil2Icon />
                  Notes
                  <CaretDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-black">
                <div className="flex space-x-1">
                  <Input className="text-white" />
                  <Button>
                    <CheckIcon />
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            {/* TODO: convert into comboboxes */}
            <Popover open={hoursOpen}>
              <PopoverTrigger asChild>
                <Button
                  className={darkMode ? darkModeButton : lightModeButton}
                  onClick={() => setHoursOpen(!hoursOpen)}
                >
                  <ClockIcon />
                  {/* TODO: this is not going to work for each instance... it's going to change all of them */}
                  {hourValue ? hourValue : "Hours"}
                  <CaretDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder="Search hours..." />
                  <CommandList>
                    <CommandEmpty>Not allowed.</CommandEmpty>
                    <CommandGroup>
                      {hours.hour
                        ?.map((hour: Hours) => (
                          <CommandItem
                            key={hour.id}
                            value={hour.hour_label}
                            onSelect={(currentValue) => {
                              setHourValue(
                                Number(currentValue) === hourValue
                                  ? undefined
                                  : Number(currentValue)
                              );
                              setHoursOpen(!hoursOpen);
                            }}
                          >
                            {hour.hour_value}
                          </CommandItem>
                        ))
                        .sort(
                          (a: Hours, b: Hours) => a.hour_value - b.hour_value
                        )}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Button
              title="Delete row"
              className="w-full sm:w-fit p-2"
              variant="destructive"
              // onClick={() => {
              //   setIndex(index - 1);
              // }}
            >
              <MinusIcon />
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-end pl-2">
        <Button
          title="Add row"
          className="w-full sm:w-fit p-2 bg-blue-500 hover:bg-blue-400"
          onClick={addRow}
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
