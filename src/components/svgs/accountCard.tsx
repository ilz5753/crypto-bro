export interface IAccountCardSvg {
  bg?: string;
  mask?: string;
}
export default function AccountCardSvg({
  bg = "#4081FF",
  mask = "#4062FF",
}: IAccountCardSvg) {
  return (
    <svg
      width="274"
      height="155"
      viewBox="0 0 274 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="274" height="155" rx="24" fill={mask} />
      <mask
        id="mask0_1_620"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="274"
        height="155"
      >
        <rect width="274" height="155" rx="24" fill={mask} />
      </mask>
      <g mask="url(#mask0_1_620)">
        <circle
          cx="252.5"
          cy="11.5"
          r="55"
          stroke="url(#paint0_linear_1_620)"
          stroke-width="21"
        />
        <circle
          cx="18.5"
          cy="147.5"
          r="55"
          stroke="url(#paint1_linear_1_620)"
          stroke-width="21"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_620"
          x1="230.5"
          y1="-44.5"
          x2="252.5"
          y2="77"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={bg} />
          <stop offset="1" stop-color={bg} stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_620"
          x1="71.5"
          y1="207.5"
          x2="50.5"
          y2="69.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={bg} />
          <stop offset="1" stop-color={bg} stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
