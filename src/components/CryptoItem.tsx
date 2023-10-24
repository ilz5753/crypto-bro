import { isUndefined } from "lodash";
import { Currencies, TCurrency } from "./svgs/currencies";
import ArrowDown2 from "./svgs/icons/ArrowDown2";
import ArrowUp2 from "./svgs/icons/ArrowUp2";
export interface ICryptoItem {
  currency: TCurrency;
  basedOnCurrency: TCurrency;
  amount: number;
  isGrowth?: boolean;
  growthAmount: number;
  growthPercent: number;
  onClick?: any;
}
export default function CryptoItem({
  currency,
  basedOnCurrency,
  amount,
  isGrowth = false,
  growthAmount,
  growthPercent,
  onClick,
}: ICryptoItem) {
  let c = Currencies[currency];
  let boc = Currencies[basedOnCurrency];
  let Caret = isGrowth ? ArrowUp2 : ArrowDown2;
  let clickable = !isUndefined(onClick);
  let caretColor = boc.colorful.props[isGrowth ? "green" : "red"];
  return (
    <div
      className={`p-4 bg-white rounded-[16px] inline-block xl:min-w-[282px] cursor-${
        clickable ? "pointer" : "none"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-x-2">
        <c.logo.Icon {...c.logo.props} />
        <div className="flex flex-col gap-y-1 flex-1">
          <div className="flex flex-row items-center text-[18px] justify-between flex-1">
            <div className="flex flex-row items-center">
              <div className="text-black font-bold">{c.unit}</div>
              <div className="text-gray-500">/{boc.unit}</div>
            </div>
            <div className="flex flex-row items-center">
              <boc.dark.Icon />
              <div className="flex flex-row items-center text-black">
                {amount}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between flex-1">
            <div className="flex flex-row items-center text-gray-500 text-[13px]">
              {c.name}
            </div>
            <div
              className={`flex flex-row items-center gap-x-[2px] ${
                isGrowth ? "text-success" : "text-error"
              }`}
            >
              <Caret color={caretColor} />
              <div className="flex flex-row items-center">
                <boc.colorful.Icon
                  {...{
                    color: caretColor,
                  }}
                />
                <p className="text-[12px]">
                  {growthAmount} ({growthPercent}%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
