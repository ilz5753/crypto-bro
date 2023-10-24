import { formatDistance, isToday, isYesterday, parseISO } from "date-fns";

export default function formatRelativeDate(nowDate: number) {
  const date = parseISO(new Date(nowDate).toISOString());

  if (isToday(date)) {
    return "today";
  } else if (isYesterday(date)) {
    return "yesterday";
  } else {
    return formatDistance(date, new Date(), {
      addSuffix: true,
    });
  }
}
