import { isUndefined } from "lodash";
import { IClick } from "../utils/type";

export interface ICryptoLogo extends IClick {
  bg: string;
  src?: any;
}
export default function CryptoLogo({
  bg,
  src,
  onClick,
  disabled,
}: ICryptoLogo) {
  let pointer = !isUndefined(onClick);
  return (
    <button
      className={`w-12 h-12 rounded-[16px] flex justify-center items-center select-none ${
        pointer
          ? "cursor-pointer"
          : disabled
          ? "cursor-not-allowed opacity-50"
          : ""
      }`}
      onClick={onClick}
      style={{ backgroundColor: bg }}
      disabled={disabled}
    >
      {src && <img src={src} className="w-6 h-6" alt={`crypto logo`} />}
    </button>
  );
}
