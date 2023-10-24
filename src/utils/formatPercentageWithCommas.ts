export default function formatPercentageWithCommas(percentage: number) {
  if (isNaN(percentage)) return "Invalid Percentage";
  const formattedPercentage = percentage.toFixed(2) + "%";
  return formattedPercentage.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
