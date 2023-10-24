import { IOnClick } from "../../utils/type";

export interface INotificationSvg extends IOnClick {
  color?: string;
  hasNewNotif?: boolean;
  newNotifColor?: string;
}
export default function NotificationSvg({
  color = "#637381",
  newNotifColor = "#FF4842",
  hasNewNotif = false,
  onClick,
}: INotificationSvg) {
  return (
    <svg
      className={onClick ? `cursor-pointer` : ""}
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2843 25.6373C13.9508 25.4963 18.0124 25.4963 18.6789 25.6373C19.2488 25.7689 19.8649 26.0764 19.8649 26.7479C19.8318 27.3871 19.4568 27.9538 18.9387 28.3137C18.2668 28.8374 17.4784 29.1691 16.6541 29.2886C16.1983 29.3477 15.7504 29.349 15.3104 29.2886C14.4848 29.1691 13.6964 28.8374 13.0259 28.3123C12.5064 27.9538 12.1314 27.3871 12.0983 26.7479C12.0983 26.0764 12.7144 25.7689 13.2843 25.6373ZM16.0603 2.66675C18.8339 2.66675 21.667 3.98277 23.35 6.1663C24.4419 7.5723 24.9428 8.97695 24.9428 11.1605V11.7285C24.9428 13.4031 25.3854 14.3901 26.3594 15.5275C27.0975 16.3655 27.3334 17.4411 27.3334 18.6081C27.3334 19.7737 26.9504 20.8803 26.1831 21.7787C25.1787 22.8556 23.7621 23.5432 22.3163 23.6627C20.2213 23.8413 18.1249 23.9917 16.0007 23.9917C13.8751 23.9917 11.7801 23.9018 9.68502 23.6627C8.23796 23.5432 6.82138 22.8556 5.81824 21.7787C5.05098 20.8803 4.66669 19.7737 4.66669 18.6081C4.66669 17.4411 4.90389 16.3655 5.64067 15.5275C6.64513 14.3901 7.05858 13.4031 7.05858 11.7285V11.1605C7.05858 8.91787 7.61779 7.45144 8.76935 6.0159C10.4814 3.92234 13.2258 2.66675 15.9411 2.66675H16.0603Z"
        fill={color}
      />
      {hasNewNotif && <circle cx="27" cy="11" r="5" fill={newNotifColor} />}
    </svg>
  );
}