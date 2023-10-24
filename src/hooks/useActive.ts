/**
 * based on https://hooks-guide.netlify.app/react-powerhooks/useActive
 */
import { RefObject, useCallback, useEffect, useState } from "react";

export default function useActive<T extends HTMLElement>(ref: RefObject<T>) {
  let [isActive, setIsActive] = useState(false);
  const setTrue = useCallback(() => {
    setIsActive(true);
  }, []);
  const setFalse = useCallback(() => {
    setIsActive(false);
  }, []);
  useEffect(() => {
    document.addEventListener("mouseup", setFalse);
    return () => {
      document.removeEventListener("mouseup", setFalse);
    };
  }, [setFalse]);
  useEffect(() => {
    document.addEventListener("mouseout", setFalse);
    return () => {
      document.removeEventListener("mouseout", setFalse);
    };
  }, [setFalse]);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mousedown", setTrue);
      return () => {
        ref.current?.removeEventListener("mousedown", setTrue);
      };
    }
  }, [setTrue]);
  return isActive;
}
