import { PropsWithChildren } from "react";
import { IBg } from "../../../utils/type";

export default function IconWrapper({ children, bg }: PropsWithChildren<IBg>) {
  return (
    <div
      className="w-12 h-12 rounded-[16px] flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}
