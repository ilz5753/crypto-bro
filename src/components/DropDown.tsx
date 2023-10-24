import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { ComponentType, useCallback, useState } from "react";
import { IDataTestId } from "../utils/type";
import ArrowDown3 from "./svgs/icons/ArrowDown3";
export interface IDropdownRenderProps {
  selectedOption: string;
}
export interface IDropdown extends IDataTestId {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
  Render?: ComponentType<IDropdownRenderProps>;
}
export default function Dropdown({
  options,
  onSelect,
  selectedOption,
  Render,
  dataTestId,
}: IDropdown) {
  let [isOpen, setIsOpen] = useState(false);
  let selectOption = useCallback(
    (option: string) => {
      onSelect(option);
      setIsOpen(false);
    },
    [onSelect]
  );
  return (
    <Popover
      placement="top"
      showArrow
      // offset={40}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      data-testid={dataTestId}
    >
      <PopoverTrigger>
        <Button>
          {Render ? (
            <Render {...{ selectedOption }} />
          ) : (
            <div className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span>{selectedOption}</span>
              <ArrowDown3 color="#454F5B" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-56 max-h-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto custom-scrollbar">
          {options.map((option, index) => (
            <div key={option}>
              <div
                onClick={() => selectOption(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                {option}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
