import { IColor } from "../../../utils/type";

export default function NavBarHome({ color }: IColor) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1797 27.6978V23.6208C12.1797 22.5801 13.0295 21.7364 14.0779 21.7364H17.9101C18.4136 21.7364 18.8964 21.9349 19.2524 22.2883C19.6083 22.6417 19.8083 23.121 19.8083 23.6208V27.6978C19.8052 28.1305 19.9761 28.5465 20.2831 28.8536C20.5902 29.1606 21.008 29.3333 21.4439 29.3333H24.0584C25.2795 29.3365 26.4516 28.8571 27.3162 28.0011C28.1808 27.145 28.6666 25.9826 28.6666 24.7704V13.1558C28.6666 12.1766 28.2294 11.2478 27.4728 10.6196L18.5787 3.56783C17.0315 2.33142 14.8148 2.37134 13.3138 3.66264L4.62266 10.6196C3.8303 11.2293 3.35672 12.1608 3.33331 13.1558V24.7586C3.33331 27.2851 5.39649 29.3333 7.94154 29.3333H10.4964C11.4016 29.3333 12.1373 28.6083 12.1439 27.7096L12.1797 27.6978Z"
        fill={color}
      />
    </svg>
  );
}
