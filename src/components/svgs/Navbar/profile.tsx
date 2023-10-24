import { IColor } from "../../../utils/type";

export default function NavBarProfile({ color }: IColor) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 20.2319C21.7848 20.2319 26.6666 21.1719 26.6666 24.7986C26.6666 28.4267 21.7528 29.3333 16 29.3333C10.2165 29.3333 5.33331 28.3933 5.33331 24.7666C5.33331 21.1386 10.2472 20.2319 16 20.2319ZM16 2.66666C19.9188 2.66666 23.0586 5.80536 23.0586 9.7214C23.0586 13.6374 19.9188 16.7775 16 16.7775C12.0825 16.7775 8.94133 13.6374 8.94133 9.7214C8.94133 5.80536 12.0825 2.66666 16 2.66666Z"
        fill={color}
      />
    </svg>
  );
}
