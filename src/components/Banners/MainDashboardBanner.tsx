import useResponsive from "../../hooks/useResponsive";
import BannerBtn from "../Micro/BannerBtn";

export default function MainDashboardBanner() {
  let { isLg } = useResponsive();
  return (
    <div className="w-full rounded-[24px] lg:pl-10 px-5 bg-primary-900 flex lg:flex-row flex-col-reverse lg:items-center gap-x-2">
      <div
        className={`flex flex-1 flex-col ${
          isLg ? "" : "items-center"
        } gap-y-4 lg:py-[50px] pb-5`}
      >
        <div className="text-white text-[36px] font-extrabold lg:text-start text-center break-word">
          <p>
            Assign expert to
            <br />
            Manage Portfolio
          </p>
        </div>
        <div className="w-[156px]">
          <BannerBtn text="Find expert" dataTestId={"FindingExpert"} />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="./nft-owner-.png"
          alt="NFT Owner logo"
          className="w-[244px] h-[244px]"
        />
      </div>
    </div>
  );
}
