import { IColor } from "../../../utils/type";

export default function NavBarActivity({ color }: IColor) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.7495 6.30054C25.6828 6.71721 25.6495 7.13387 25.6495 7.55054C25.6495 11.3005 28.6828 14.3322 32.4161 14.3322C32.8328 14.3322 33.2328 14.2839 33.6495 14.2172V27.6655C33.6495 33.3172 30.3161 36.6672 24.6495 36.6672H12.3345C6.66614 36.6672 3.33281 33.3172 3.33281 27.6655V15.3339C3.33281 9.66721 6.66614 6.30054 12.3345 6.30054H25.7495ZM26.0845 16.4339C25.6328 16.3839 25.1845 16.5839 24.9161 16.9505L20.8845 22.1672L16.2661 18.5339C15.9828 18.3172 15.6495 18.2322 15.3161 18.2672C14.9845 18.3172 14.6845 18.4989 14.4828 18.7655L9.55114 25.1839L9.44948 25.3339C9.16614 25.8655 9.29948 26.5489 9.79948 26.9172C10.0328 27.0672 10.2828 27.1672 10.5661 27.1672C10.9511 27.1839 11.3161 26.9822 11.5495 26.6672L15.7328 21.2822L20.4828 24.8505L20.6328 24.9489C21.1661 25.2322 21.8328 25.1005 22.2161 24.5989L27.0328 18.3839L26.9661 18.4172C27.2328 18.0505 27.2828 17.5839 27.0995 17.1672C26.9178 16.7505 26.5161 16.4672 26.0845 16.4339ZM32.6496 3.33337C34.8663 3.33337 36.6663 5.13337 36.6663 7.35004C36.6663 9.56671 34.8663 11.3667 32.6496 11.3667C30.433 11.3667 28.633 9.56671 28.633 7.35004C28.633 5.13337 30.433 3.33337 32.6496 3.33337Z"
        // fill="#4062FF"
        fill={color}
      />
    </svg>
  );
}