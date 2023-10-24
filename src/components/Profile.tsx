// @ts-nocheck
import { noop } from "lodash";
import { PropsWithChildren, useReducer } from "react";
import { Day } from "../utils/constants";
import formatSlashWithCommas from "../utils/formatSlashWithCommas";
import { IClick } from "../utils/type";
import Transaction from "./Transaction";
import TransferBtn from "./TransferBtn";
import AccountCardSvg from "./svgs/accountCard";
import { Currencies, TCurrency } from "./svgs/currencies";
import ArrowDown from "./svgs/icons/ArrowDown";
import ArrowDown2 from "./svgs/icons/ArrowDown2";
import ArrowUp from "./svgs/icons/ArrowUp";
import ArrowUp2 from "./svgs/icons/ArrowUp2";
import NotificationSvg from "./svgs/notification";
const HeaderText = ({ children }: PropsWithChildren) => (
  <p className="text-[24px] font-extrabold text-black">{children}</p>
);
export function ProfileImage({ onClick, disabled }: IClick) {
  return (
    <button
      className={`${
        onClick
          ? "cursor-pointer"
          : disabled
          ? "cursor-not-allowed opacity-50"
          : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <img
        src="./profile-photo1.jpg"
        alt="Profile Photo"
        className={`w-8 h-8 rounded-[50%]`}
      />
    </button>
  );
}
export interface IProfile {
  userActiveCurrency?: TCurrency;
  isGrowth?: boolean;
  amount?: number;
  percent?: number;
}
export default function Profile({
  userActiveCurrency = "usdt",
  isGrowth = false,
  amount = 32,
  percent = 2,
}: IProfile) {
  let [showNewNotif, toggleShowNewNotif] = useReducer((s) => !s, false);
  let userCurrency = Currencies[userActiveCurrency];
  let Caret = isGrowth ? ArrowUp2 : ArrowDown2;
  return (
    <div className="lg:px-8 px-4">
      <div className="mt-9 mb-[43px] flex flex-row items-center justify-between">
        <NotificationSvg
          hasNewNotif={showNewNotif}
          onClick={toggleShowNewNotif}
        />
        <div className="flex flex-row items-center gap-x-2 cursor-pointer">
          <ProfileImage />
          <div className="flex flex-row items-center gap-x-1 text-[16px] text-black">
            <p className="font-extrabold">Timothy</p>
            <ArrowDown2 color="black" />
          </div>
        </div>
      </div>
      <HeaderText>Accounts</HeaderText>
      <div className="mt-4 mb-[13px] w-[274px] h-[155px] overflow-hidden custom-scrollbar relative cursor-pointer">
        <AccountCardSvg />
        <div className="absolute z-[1] inset-0 flex flex-1 flex-col space-y-[12px] justify-center items-center">
          <p className="text-[24px] font-extrabold text-white flex flex-row items-center gap-y-1">
            <userCurrency.UserProfile.Heavy
              {...userCurrency.UserProfile.props}
            />
            {formatSlashWithCommas(1445000)}
          </p>
          <div
            className="py-2 px-4 min-h-[47px] flex flex-row items-center text-white rounded-[26px]"
            style={{ backgroundColor: "#4081FF" }}
          >
            <Caret color="#FFFFFF" />
            <div
              className="text-[12px] align-middle flex items-center"
              style={{ fontFamily: "NexaRegular" }}
            >
              <userCurrency.UserProfile.Light
                {...userCurrency.UserProfile.props}
              />
              {amount} ({percent}%)
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center gap-x-2 mb-[57px]">
        <div className="flex-1">
          <TransferBtn
            bg="#4062FF"
            color="#FFFFFF"
            text="Deposit"
            Icon={ArrowUp}
            onClick={noop}
          />
        </div>
        <div className="flex-1">
          <TransferBtn
            bg="#40BAFF"
            color="#FFFFFF"
            text="Withdraw"
            Icon={ArrowDown}
            onClick={noop}
          />
        </div>
      </div>
      <HeaderText>Recent Transactions</HeaderText>
      <div className="mt-[26px] flex flex-col gap-y-[14px]">
        <Transaction
          currency={"btc"}
          date={Date.now()}
          amount={2.5}
          isDeposit
          onClick={noop}
        />
        <Transaction
          currency={"eth"}
          date={Date.now() - 2 * Day}
          amount={3.05}
          isDeposit={false}
          onClick={noop}
        />
        <Transaction
          currency={"eth"}
          date={Date.now() - 3 * Day}
          amount={1.05}
          isDeposit
          onClick={noop}
        />
      </div>
    </div>
  );
}
