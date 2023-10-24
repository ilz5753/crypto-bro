import { IoCloseCircleSharp } from "react-icons/io5";
import NavigationSideBar from "./NavigationSideBar";

interface ISideBarModal {
  close?: any;
}
export default function SideBarModal({ close }: ISideBarModal) {
  return (
    <div className="absolute z-10 w-screen h-screen backdrop-blur-sm top-0 left-0 bg-bg-0 backdrop-opacity-50">
      <NavigationSideBar
        rightIcon={
          <IoCloseCircleSharp
            className="text-primary-900 text-[24px] cursor-pointer"
            onClick={close}
          />
        }
      />
    </div>
  );
}
