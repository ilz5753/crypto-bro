import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import Search from "./Search";
import SearchIcon from "./svgs/icons/Search";

export interface ISearchPopover {}
export default function SearchPopover({}: ISearchPopover) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      placement="bottom"
      showArrow
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger>
        <Button>
          <SearchIcon color="#3457D1" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto custom-scrollbar">
          <Search />
        </div>
      </PopoverContent>
    </Popover>
  );
}
