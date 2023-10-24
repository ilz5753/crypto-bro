import { IColor } from "../../../utils/type";

export default function HamburgerMenuIcon({ color }: IColor) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="4" rx="2" fill={color} />
      <rect y="10" width="24" height="4" rx="2" fill={color} />
      <rect y="20" width="24" height="4" rx="2" fill={color} />
    </svg>
  );
}
