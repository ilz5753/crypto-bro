import formatRelativeDate from "../utils/formatRelativeDate";
import { IClick } from "../utils/type";
import { Currencies, TCurrency } from "./svgs/currencies";
export interface ITransaction extends IClick {
  currency: TCurrency;
  isDeposit?: boolean;
  date: number;
  amount: number;
}
export default function Transaction({
  currency,
  isDeposit = false,
  date,
  amount,
  onClick,
  disabled,
}: ITransaction) {
  let { logo, name, unit } = Currencies[currency];
  return (
    <button
      className={`w-full flex flex-row items-center justify-between ${
        onClick
          ? "cursor-pointer"
          : disabled
          ? "cursor-not-allowed opacity-50"
          : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex-1 flex flex-row items-center gap-x-4">
        <logo.Icon {...logo.props} />
        <div className="flex flex-col flex-1">
          <p className="text-[14px] text-black font-extrabold">
            {name} {isDeposit ? "Buy" : "Sell"}
          </p>
          <p
            className="text-[12px] text-gray-500"
            style={{ fontFamily: "NexaRegular" }}
          >
            {formatRelativeDate(date)}
          </p>
        </div>
      </div>
      <div
        className={`text-[14px] text-${
          isDeposit ? "success" : "error"
        } font-extrabold`}
      >
        {isDeposit ? "+" : "-"}
        {amount}
        {` ${unit}`}
      </div>
    </button>
  );
}
