import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  let isMd = useMediaQuery({ query: "(min-width: 768px)" });
  let isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  let isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  //   let isXll = useMediaQuery({ query: "(min-width: 768px)" });
  return {
    isMd,
    isLg,
    isXl,
  };
}
