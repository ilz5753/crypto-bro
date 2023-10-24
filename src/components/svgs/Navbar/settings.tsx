import { IColor } from "../../../utils/type";

export default function NavBarSettings({ color }: IColor) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9562 2.6668C17.9645 2.6668 18.8774 3.2268 19.3816 4.05347C19.6269 4.45347 19.7904 4.9468 19.7495 5.4668C19.7223 5.8668 19.8449 6.2668 20.0629 6.64014C20.7578 7.77347 22.2976 8.20014 23.4967 7.56014C24.8457 6.7868 26.5489 7.25347 27.3256 8.57347L28.2386 10.1468C29.0289 11.4668 28.5928 13.1601 27.2302 13.9201C26.072 14.6001 25.6632 16.1068 26.3582 17.2535C26.5762 17.6135 26.8215 17.9201 27.203 18.1068C27.6799 18.3601 28.0478 18.7601 28.3067 19.1601C28.8109 19.9868 28.77 21.0001 28.2794 21.8935L27.3256 23.4935C26.8215 24.3468 25.8813 24.8801 24.9138 24.8801C24.4369 24.8801 23.9055 24.7468 23.4694 24.4801C23.1152 24.2535 22.7064 24.1735 22.2703 24.1735C20.9214 24.1735 19.7904 25.2801 19.7495 26.6001C19.7495 28.1335 18.4959 29.3335 16.9289 29.3335H15.0758C13.4951 29.3335 12.2415 28.1335 12.2415 26.6001C12.2143 25.2801 11.0833 24.1735 9.73433 24.1735C9.28467 24.1735 8.87588 24.2535 8.53523 24.4801C8.09919 24.7468 7.55415 24.8801 7.09086 24.8801C6.10978 24.8801 5.16958 24.3468 4.66542 23.4935L3.72522 21.8935C3.22105 21.0268 3.1938 19.9868 3.69797 19.1601C3.91598 18.7601 4.32477 18.3601 4.78805 18.1068C5.16958 17.9201 5.41485 17.6135 5.6465 17.2535C6.3278 16.1068 5.91902 14.6001 4.7608 13.9201C3.41182 13.1601 2.97578 11.4668 3.75247 10.1468L4.66542 8.57347C5.45573 7.25347 7.14537 6.7868 8.50798 7.56014C9.69345 8.20014 11.2332 7.77347 11.9281 6.64014C12.1461 6.2668 12.2688 5.8668 12.2415 5.4668C12.2143 4.9468 12.3642 4.45347 12.6231 4.05347C13.1272 3.2268 14.0402 2.69347 15.0349 2.6668H16.9562ZM16.016 12.2401C13.8767 12.2401 12.1461 13.9201 12.1461 16.0135C12.1461 18.1068 13.8767 19.7735 16.016 19.7735C18.1553 19.7735 19.8449 18.1068 19.8449 16.0135C19.8449 13.9201 18.1553 12.2401 16.016 12.2401Z"
        fill={color}
      />
    </svg>
  );
}