import { isEqual, map } from "lodash";
import { useState } from "react";
import { IId, IRightIcon } from "../utils/type";
import NavigationItem, { TNavigationItem } from "./NavigationItem";
export type TSideBarBtn = Pick<
  TNavigationItem,
  "Icon" | "danger" | "text" | "outline"
> &
  IId;
export interface ISameSideBarProps extends IRightIcon {}
export interface ISideBar extends ISameSideBarProps {
  topButtons?: TSideBarBtn[];
  bottomButtons?: TSideBarBtn[];
}
export default function SideBar({
  topButtons = [],
  bottomButtons = [],
  rightIcon,
}: ISideBar) {
  let [topId, setTopId] = useState(topButtons[0].id);
  let [bottomId, setBottomId] = useState(bottomButtons[0].id);
  return (
    <div className={`w-[271px] overflow-y-auto custom-scrollbar`}>
      <div className="absolute z-[2] top-0 left-0">
        <div
          className={`mt-[29px] ml-[41px] mb-[75.92px] flex flex-row items-center ${
            rightIcon ? "justify-between" : ""
          }`}
        >
          <img src="./logo.svg" alt="logo" />
          {rightIcon && <div className="ml-2 mr-6">{rightIcon}</div>}
        </div>
        {map(topButtons, ({ id, ...btn }, index) => {
          let active = isEqual(id, topId);
          return (
            <div key={id}>
              {!isEqual(index, 0) && <div className="mt-4" />}
              <NavigationItem
                {...btn}
                onClick={() => {
                  setTopId(id);
                }}
                active={active}
                outline={btn.outline ?? !active}
                hideLeftBorder={!active}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute z-[3] bottom-[73px] left-0">
        {map(bottomButtons, ({ id, ...btn }, index) => {
          let active = isEqual(id, bottomId);
          return (
            <div key={id}>
              {!isEqual(index, 0) && <div className="mt-4" />}
              <NavigationItem
                {...btn}
                onClick={() => {
                  setBottomId(id);
                }}
                active={active}
                outline={btn.outline ?? !active}
                hideLeftBorder={btn.danger}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
