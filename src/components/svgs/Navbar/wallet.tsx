import { IColor } from "../../../utils/type";

export default function NavBarWallet({ color }: IColor) {
  return (
    <svg
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.2249 0C28.7431 0 32 3.17535 32 8.61088H25.2302V8.66635C22.0883 8.66635 19.5413 11.1496 19.5413 14.2128C19.5413 17.276 22.0883 19.7593 25.2302 19.7593H32V20.2585C32 25.6247 28.7431 28.8 23.2249 28.8H8.77511C3.25689 28.8 0 25.6247 0 20.2585V8.54155C0 3.17535 3.25689 0 8.77511 0H23.2249ZM30.8053 10.9959C31.4651 10.9959 32 11.5173 32 12.1606V16.2095C31.9923 16.8497 31.4619 17.3668 30.8053 17.3743H25.3582C23.7676 17.3952 22.3768 16.3334 22.016 14.8229C21.8353 13.8853 22.089 12.9177 22.7089 12.1795C23.3289 11.4414 24.2518 11.0081 25.2302 10.9959H30.8053ZM25.9982 12.8678H25.472C25.1489 12.8641 24.8378 12.9866 24.608 13.2081C24.3782 13.4295 24.2489 13.7314 24.2489 14.0464C24.2488 14.7073 24.7942 15.2452 25.472 15.2528H25.9982C26.6737 15.2528 27.2213 14.7189 27.2213 14.0603C27.2213 13.4017 26.6737 12.8678 25.9982 12.8678ZM16.6116 6.2259H7.58044C6.91045 6.22586 6.36512 6.75135 6.35733 7.40453C6.35733 8.0654 6.90264 8.60328 7.58044 8.61088H16.6116C17.2871 8.61088 17.8347 8.07699 17.8347 7.41839C17.8347 6.7598 17.2871 6.2259 16.6116 6.2259Z"
        fill={color}
      />
    </svg>
  );
}
