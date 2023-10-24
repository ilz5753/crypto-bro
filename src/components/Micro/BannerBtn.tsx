import { IClick, IDataTestId } from "../../utils/type";

export interface IBannerBtn extends IDataTestId, IClick {
  text: string;
}
export default function BannerBtn({
  text,
  disabled = false,
  onClick,
  dataTestId,
}: IBannerBtn) {
  return (
    <button
      className={`flex items-center justify-center rounded-[16px] px-6 py-4 bg-secondary ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer active:bg-primary-900 hover:bg-primary-800"
      } text-[18px] font-extrabold text-white`}
      onClick={onClick}
      data-testid={dataTestId}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
