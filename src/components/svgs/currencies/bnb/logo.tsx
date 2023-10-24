import IconWrapper from "../IconWrapper";
import { ICurrencyLogo } from "../type";

export default function CurrenciesBnbLogo({ bg, color }: ICurrencyLogo) {
  return (
    <IconWrapper {...{ bg }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_102_89)">
          <path
            d="M16.624 13.92L19.341 16.636L11.988 23.989L4.636 16.637L7.353 13.92L11.989 18.58L16.624 13.92ZM21.261 9.28401L24 12L21.285 14.716L18.568 12L21.261 9.28401ZM11.989 9.28401L14.705 11.976L11.988 14.693L9.272 12L11.988 9.28501L11.989 9.28401ZM2.716 9.28401L5.41 12L2.718 14.692L0 12L2.716 9.28401ZM11.99 0.0100098L19.342 7.34001L16.625 10.055L11.989 5.41901L7.354 10.079L4.637 7.36301L11.989 0.0110098L11.99 0.0100098Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_102_89">
            <rect width="24" height="24" fill={color} />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
