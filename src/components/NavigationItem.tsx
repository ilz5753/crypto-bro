import { useRef } from "react";
import { useHover } from "usehooks-ts";
import NavigationBtn, { INavigationBtn } from "./Micro/NavigationBtn";
export type TNavigationItem = Omit<INavigationBtn, "isHovered"> & {
  hideLeftBorder?: boolean;
};
export default function NavigationItem({
  disabled = false,
  danger = false,
  active = false,
  hideLeftBorder = false,
  ...props
}: TNavigationItem) {
  let ref = useRef(null);
  let isHovered = useHover(ref);
  // let active = useActive(ref);
  return (
    <div className="flex flex-row items-center w-full h-[58px] pr-6">
      <div
        className={`w-3 h-full rounded-r-[16px] mr-7 ${
          hideLeftBorder
            ? "bg-[transparent]"
            : danger
            ? "bg-error"
            : active
            ? "bg-primary-800"
            : `${isHovered ? "bg-primary-900" : "bg-gray-500"}`
        } ${disabled ? "opacity-50" : ""}`}
      />
      <div ref={ref}>
        <NavigationBtn {...{ disabled, active, isHovered, danger, ...props }} />
      </div>
    </div>
  );
}
