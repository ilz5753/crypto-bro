import { isUndefined } from "lodash";
import { ComponentType } from "react";
import { IClick, IColor } from "../utils/type";

export interface ITransferBtn extends IClick, IColor {
  bg: string;
  text: string;
  Icon: ComponentType<IColor>;
}
export default function TransferBtn({
  bg,
  color,
  Icon,
  text,
  onClick,
  disabled,
}: ITransferBtn) {
  let clickable = !isUndefined(onClick);
  return (
    <div
      className={`py-[15px] flex flex-row items-center justify-center gap-x-1 rounded-[16px] ${
        clickable
          ? "cursor-pointer"
          : disabled
          ? "cursor-not-allowed opacity-50"
          : ""
      } text-[14px] font-extrabold `}
      style={{ backgroundColor: bg, color }}
      onClick={onClick}
    >
      <Icon color={color} />
      {text}
    </div>
  );
}
