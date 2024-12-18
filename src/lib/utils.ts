import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const darkModeButton = "border bg-black w-full font-normal"

export const lightModeButton = "border bg-white text-black w-full hover:cursor-pointer hover:bg-white font-normal"

export const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

// TODO: add lists for select options? probably better to bring that in from database... what if user wants to add new name or category or note...

export const hours = [
  {
    value: 0.25,
    label: 0.25
  },
  {
    value: 0.5,
    label: 0.5
  },
  {
    value: 0.75,
    label: 0.75
  },
  {
    value: 1,
    label: 1
  },
  {
    value: 1.25,
    label: 1.25
  },
  {
    value: 1.5,
    label: 1.5
  },
  {
    value: 1.75,
    label: 1.75
  },
  {
    value: 2,
    label: 2
  },
  {
    value: 2.25,
    label: 2.25
  },
  {
    value: 2.5,
    label: 2.5
  },
  {
    value: 2.75,
    label: 2.75
  },
  {
    value: 3,
    label: 3
  },
  {
    value: 3.25,
    label: 3.25
  },
  {
    value: 3.5,
    label: 3.5
  },
  {
    value: 3.75,
    label: 3.75
  },
  {
    value: 4,
    label: 4
  },
  {
    value: 4.25,
    label: 4.25
  },
  {
    value: 4.5,
    label: 4.5
  },
  {
    value: 4.75,
    label: 4.75
  },
  {
    value: 5,
    label: 5
  },
  {
    value: 5.25,
    label: 5.25
  },
  {
    value: 5.5,
    label: 5.5
  },
  {
    value: 5.75,
    label: 5.75
  },
  {
    value: 6,
    label: 6
  },
  {
    value: 6.25,
    label: 6.25
  },
  {
    value: 6.5,
    label: 6.5
  },
  {
    value: 6.75,
    label: 6.75
  },
  {
    value: 7,
    label: 7
  },
  {
    value: 7.25,
    label: 7.25
  },
  {
    value: 7.5,
    label: 7.5
  },
  {
    value: 7.75,
    label: 7.75
  },
  {
    value: 1,
    label: 1
  },
  {
    value: 1.25,
    label: 1.25
  },
  {
    value: 1.5,
    label: 1.5
  },
  {
    value: 1.75,
    label: 1.75
  },
]