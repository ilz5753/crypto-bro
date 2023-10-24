export default function formatSlashWithCommas(slashNumber: number) {
  if (isNaN(slashNumber)) return "Invalid Number";
  const numberString = slashNumber.toString();
  const parts = numberString.split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let formattedNumber = integerPart;
  if (parts[1]) formattedNumber += "/" + parts[1];
  return formattedNumber;
}
