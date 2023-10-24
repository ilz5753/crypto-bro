import { isUndefined } from "lodash";
import { ComponentType, useMemo } from "react";
import { IColor, IDataTestId } from "../../utils/type";

export interface INavigationBtn extends IDataTestId {
  active?: boolean;
  outline?: boolean;
  disabled?: boolean;
  Icon?: ComponentType<IColor>;
  text: string;
  danger?: boolean;
  onClick?: any;
  isHovered?: boolean;
}
export default function NavigationBtn({
  active = false,
  outline = false,
  disabled = false,
  Icon,
  text,
  danger = false,
  onClick,
  isHovered = false,
  dataTestId,
}: INavigationBtn) {
  let color = useMemo(
    () =>
      outline
        ? danger
          ? "#FF4842"
          : active
          ? "#4062FF"
          : isHovered
          ? "#3457D1"
          : "#919EAB"
        : "#FFFFFF",
    [danger, active, isHovered, outline]
  );
  return (
    <button
      className={`flex flex-row items-center justify-center rounded-[16px] px-6 py-4 select-none ${
        outline
          ? danger
            ? "text-error"
            : active
            ? "text-primary-800"
            : isHovered
            ? "text-primary-900"
            : "text-gray-500"
          : `text-white ${
              danger
                ? "bg-error"
                : active
                ? "bg-primary-800"
                : isHovered
                ? "bg-primary-900"
                : "bg-gray-500 "
            }`
      } ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } text-[16px] font-bold`}
      onClick={onClick}
      data-testid={dataTestId}
      disabled={disabled}
      role="button"
    >
      {!isUndefined(Icon) && (
        <div className="mr-4">
          <Icon color={color} />
        </div>
      )}
      {text}
    </button>
  );
}
