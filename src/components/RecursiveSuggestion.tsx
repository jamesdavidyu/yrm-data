import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { PaperPlaneIcon, PlusIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { darkModeButton, lightModeButton } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger } from "./ui/select";

export interface DataEntryProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const RecursiveSuggestion = ({
  darkMode,
  setDarkMode,
}: DataEntryProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-yellow-300 hover:bg-yellow-200 text-black">
            Submit <PlusIcon /> Suggest more fields
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
                <Button className={darkMode ? darkModeButton : lightModeButton}>
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
    </>
  );
};
