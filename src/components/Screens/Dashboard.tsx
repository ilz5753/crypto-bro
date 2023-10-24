import { noop } from "lodash";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useResponsive from "../../hooks/useResponsive";
import { Day } from "../../utils/constants";
import MainDashboardBanner from "../Banners/MainDashboardBanner";
import Chart, { IChartData } from "../Chart";
import CryptoItem from "../CryptoItem";
import Dropdown, { IDropdownRenderProps } from "../DropDown";
import { ProfileImage } from "../Profile";
import Search from "../Search";
import SearchPopover from "../SearchPopover";
import NavBarActivity from "../svgs/Navbar/activity";
import ArrowDown2 from "../svgs/icons/ArrowDown2";

function RenderOption({ selectedOption }: IDropdownRenderProps) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[101px] min-h-[35px] gap-x-1 border border-gray-500 rounded-[11px] hover:bg-gray-100 select-none">
      <span
        className="text-[14px] text-gray-500"
        style={{ fontFamily: "NexaRegular" }}
      >
        {selectedOption}
      </span>
      <ArrowDown2 color="#919EAB" />
    </div>
  );
}

let options = [
  "1 Hour",
  "2 Hour",
  "3 Hour",
  "6 Hour",
  "12 Hour",
  "1 Day",
  "3 Day",
  "15 Day",
  "1 Week",
  "3 Week",
  "15 Week",
  "1 Month",
  "3 Month",
  "6 Month",
  "1 Year",
  "> 1 Year",
];

let now = Date.now();
let addDay = (num: number) => now + num * Day;
let chartData: IChartData[] = [
  {
    value: 410,
    date: addDay(0),
  },
  {
    value: 524,
    date: addDay(1),
  },
  {
    value: 330,
    date: addDay(2),
  },
  {
    value: 300,
    date: addDay(3),
  },
  {
    value: 540,
    date: addDay(4),
  },
  {
    value: 280,
    date: addDay(5),
  },
  {
    value: 320,
    date: addDay(6),
  },
];

function ChartView() {
  let [selectedTimingView, setSelectedTimingView] = useState(options[0]);
  return (
    <div className="px-6 pt-[22px] bg-white rounded-[24px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-[5px]">
          <NavBarActivity color="#4062FF" />
          <p className="text-[18px] font-extrabold text-black">
            Total Portfolio
          </p>
        </div>
        <Dropdown
          onSelect={setSelectedTimingView}
          options={options}
          selectedOption={selectedTimingView}
          Render={RenderOption}
        />
      </div>
      <div className="mt-4" />
      <div className="flex-1 rounded-[24px]">
        <Chart data={chartData} />
      </div>
    </div>
  );
}

interface IDashboard {
  openSideBarNav?: any;
  openProfile?: any;
}
export default function Dashboard({ openSideBarNav, openProfile }: IDashboard) {
  let { isLg } = useResponsive();
  return (
    <div className={`custom-scrollbar overflow-auto bg-bg-1 flex-1`}>
      <div className="px-[31px]">
        <div className="mt-6 mb-8 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-x-4">
            <div className="md:hidden block">
              <button
                className="text-primary-900 cursor-pointer text-[21px]"
                onClick={openSideBarNav}
                data-testid="Menu"
              >
                <RxHamburgerMenu />
              </button>
            </div>
            <div className={`${isLg ? "hidden" : "block"}`}>
              <SearchPopover />
            </div>
            <div className="hidden lg:block">
              <Search />
            </div>
          </div>
          <div className="xl:hidden block">
            <ProfileImage onClick={openProfile} data-testid="Profile" />
          </div>
        </div>
        <MainDashboardBanner />
        <div className="mt-14 mb-1">
          <p className="text-[24px] font-extrabold">My Portfolio</p>
          <div className="my-[25px] overflow-hidden">
            <div className="xl:flex xl:overflow-x-auto scrollbar-thin xl:space-x-4  grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4">
              <CryptoItem
                currency="btc"
                basedOnCurrency="usdt"
                amount={135.25}
                growthAmount={32}
                growthPercent={2}
                onClick={noop}
              />
              <CryptoItem
                currency="eth"
                basedOnCurrency="usdt"
                amount={215}
                growthAmount={32}
                growthPercent={2}
                isGrowth
                onClick={noop}
              />
              <CryptoItem
                currency="bnb"
                basedOnCurrency="usdt"
                amount={135.25}
                growthAmount={32}
                growthPercent={2}
                onClick={noop}
              />
              <CryptoItem
                currency="btc"
                basedOnCurrency="usdt"
                amount={135.25}
                growthAmount={32}
                growthPercent={2}
                onClick={noop}
              />
            </div>
          </div>
        </div>
        <ChartView />
        <div className="mt-[128px]" />
      </div>
    </div>
  );
}
