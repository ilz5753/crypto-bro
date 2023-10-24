import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import NavigationSideBar from "./components/NavigationSideBar";
import Profile from "./components/Profile";
import Dashboard from "./components/Screens/Dashboard";
import useResponsive from "./hooks/useResponsive";
import { IClick } from "./utils/type";
const RowBlurView = ({ children }: PropsWithChildren) => (
  <div className="absolute z-10 w-screen h-screen top-0 left-0 backdrop-blur-sm flex flex-row">
    {children}
  </div>
);
const HideView = (click: IClick) => (
  <div className="flex-1 cursor-pointer" {...click} />
);
const SideView = ({ children }: PropsWithChildren) => (
  <div className="bg-bg-0" children={children} />
);
function App() {
  let { isMd, isXl } = useResponsive();
  let [showSideBarNav, setShowSideBarNav] = useState(false);
  let [showProfile, setShowProfile] = useState(false);
  let openSideBarNav = useCallback(() => setShowSideBarNav(true), []);
  let hideSideBarNav = useCallback(() => setShowSideBarNav(false), []);
  let openProfile = useCallback(() => setShowProfile(true), []);
  let hideProfile = useCallback(() => setShowProfile(false), []);
  useEffect(() => {
    if (isMd) hideSideBarNav();
  }, [isMd, hideSideBarNav]);
  useEffect(() => {
    if (isXl) hideProfile();
  }, [isXl, hideProfile]);
  let nav = useMemo(() => <NavigationSideBar />, []);
  let profile = useMemo(() => <Profile />, []);
  return (
    <div style={{ fontFamily: "NexaHeavy" }}>
      <div
        className={`max-h-screen bg-bg-0 ${isMd ? "flex flex-row" : ""} ${
          showProfile || showSideBarNav ? "overflow-hidden" : ""
        }`}
      >
        <div className="hidden md:block">{nav}</div>
        <Dashboard {...{ openSideBarNav, openProfile }} />
        <div className="xl:block hidden">{profile}</div>
      </div>
      {showSideBarNav && (
        <RowBlurView>
          <SideView>{nav}</SideView>
          <HideView onClick={hideSideBarNav} />
        </RowBlurView>
      )}
      {showProfile && (
        <RowBlurView>
          <HideView onClick={hideProfile} />
          <SideView>{profile}</SideView>
        </RowBlurView>
      )}
    </div>
  );
}

export default App;
