import SideBar, { ISameSideBarProps, TSideBarBtn } from "./SideBar";
import NavBarActivity from "./svgs/Navbar/activity";
import NavBarHome from "./svgs/Navbar/home";
import NavBarLogout from "./svgs/Navbar/logout";
import NavBarProfile from "./svgs/Navbar/profile";
import NavBarSettings from "./svgs/Navbar/settings";
import NavBarSwap from "./svgs/Navbar/swap";
import NavBarWallet from "./svgs/Navbar/wallet";
let topButtons: TSideBarBtn[] = [
  {
    id: "0",
    text: "Dashboard",
    Icon: NavBarHome,
  },
  {
    id: "1",
    text: "Exchange",
    Icon: NavBarSwap,
  },
  {
    id: "2",
    text: "Wallets",
    Icon: NavBarWallet,
  },
  {
    id: "3",
    text: "Statistics",
    Icon: NavBarActivity,
  },
  {
    id: "4",
    text: "Profile",
    Icon: NavBarProfile,
  },
  {
    id: "5",
    text: "Settings",
    Icon: NavBarSettings,
  },
];
let bottomButtons: TSideBarBtn[] = [
  {
    id: "0",
    text: "Logout",
    Icon: NavBarLogout,
    danger: true,
    outline: true,
  },
];
export default function NavigationSideBar(sameProps: ISameSideBarProps) {
  return <SideBar {...{ topButtons, bottomButtons, ...sameProps }} />;
}
