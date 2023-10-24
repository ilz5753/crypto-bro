import IconWrapper from "../IconWrapper";
import { ICurrencyLogo } from "../type";

export default function CurrenciesBtcLogo({ bg, color }: ICurrencyLogo) {
  return (
    <IconWrapper {...{ bg }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25001 19.5V21.375C8.25001 21.582 8.41801 21.75 8.62501 21.75H10.125C10.2245 21.75 10.3198 21.7105 10.3902 21.6402C10.4605 21.5698 10.5 21.4745 10.5 21.375V19.5H11.25V21.375C11.25 21.582 11.418 21.75 11.625 21.75H13.125C13.2245 21.75 13.3198 21.7105 13.3902 21.6402C13.4605 21.5698 13.5 21.4745 13.5 21.375V19.5H13.626C16.614 19.5 18.75 17.9505 18.75 15.27C18.75 13.017 17.2395 11.7855 15.471 11.61V11.478C16.926 11.115 17.9955 10.017 17.9955 8.193C17.9955 5.895 16.2705 4.5 13.638 4.5H13.5V2.625C13.5 2.52554 13.4605 2.43016 13.3902 2.35984C13.3198 2.28951 13.2245 2.25 13.125 2.25H11.625C11.5255 2.25 11.4302 2.28951 11.3598 2.35984C11.2895 2.43016 11.25 2.52554 11.25 2.625V4.5H10.3905V2.625C10.3905 2.52554 10.351 2.43016 10.2807 2.35984C10.2103 2.28951 10.115 2.25 10.0155 2.25H8.62501C8.52555 2.25 8.43017 2.28951 8.35984 2.35984C8.28951 2.43016 8.25001 2.52554 8.25001 2.625V4.5L5.25301 4.5165C5.15355 4.5165 5.05817 4.55601 4.98784 4.62633C4.91751 4.69666 4.87801 4.79204 4.87801 4.8915V6.375C4.87801 6.5805 5.04301 6.75 5.25001 6.75L6.38251 6.7425C6.67957 6.74448 6.9638 6.86388 7.17316 7.07464C7.38252 7.28541 7.50001 7.57043 7.50001 7.8675V16.125C7.50001 16.4234 7.38148 16.7095 7.1705 16.9205C6.95952 17.1315 6.67337 17.25 6.37501 17.25L5.25301 17.2665C5.15355 17.2665 5.05817 17.306 4.98784 17.3763C4.91751 17.4467 4.87801 17.542 4.87801 17.6415V19.1415C4.87801 19.3485 5.04601 19.5165 5.25301 19.5165L8.25001 19.5ZM10.3905 6.7305H12.969C14.328 6.7305 15.126 7.4775 15.126 8.6985C15.126 10.005 14.2635 10.7415 12.3105 10.7415H10.3905V6.7305ZM10.3905 12.807H13.1505C14.856 12.807 15.7845 13.677 15.7845 15.093C15.7845 16.5225 14.8455 17.268 12.5475 17.268H10.3905V12.8085V12.807Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  );
}