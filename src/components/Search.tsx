import { isNull } from "lodash";
import {
  ChangeEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import SearchIcon from "./svgs/icons/Search";
export default function Search() {
  let ref = useRef<HTMLInputElement>(null);
  let [search, setSearch] = useState("");
  let onClick = useCallback(() => {
    if (!isNull(ref.current)) ref.current.focus();
  }, []);
  let onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => setSearch(value),
    []
  );
  return (
    <div
      className="lg:w-[323px] lg:h-[56px] w-full flex-1 rounded-[16px] bg-white px-6 flex flex-row items-center py-4 gap-x-[17px] cursor-pointer"
      onClick={onClick}
    >
      <SearchIcon color="#919EAB" />
      <input
        ref={ref}
        className="placeholder:text-gray-500 flex-1 text-[14px] active:border-[0px] px-2 py-1"
        placeholder="Search anything"
        value={search}
        onChange={onChange}
      />
    </div>
  );
}
