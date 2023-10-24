// @ts-ignore
import CanvasJSReact from "@canvasjs/react-charts";
import { format } from "date-fns";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
export interface IChartData {
  date: number;
  value: number;
}
export interface IChart {
  data?: IChartData[];
}
let labelFormatter = ({ value }: any) => format(value, "iiii");
export default function Chart({ data = [] }: IChart) {
  let axisProps = {
    labelFontWeight: "bold",
    labelFontColor: "#919EAB",
    labelFontSize: 14,
    labelFontFamily: "Nexa-Heavy",
    lineColor: "transparent",
    tickLength: 0,
    scaleBreaks: {
      autoCalculate: true,
      color: "transparent",
      lineColor: "transparent",
    },
  };
  const options = {
    zoomEnabled: true,
    zoomType: "xy",
    animationEnabled: true,
    panEnabled: true,
    exportEnabled: true,
    exportFileName: "CryptoBroChart",
    backgroundColor: "transparent",
    creditText: "CryptoBro",
    axisY: {
      interlacedColor: "transparent",
      gridColor: "transparent",
      ...axisProps,
    },
    axisX: {
      interlacedColor: "transparent",
      gridColor: "transparent",
      labelFormatter: (e: any) => labelFormatter(e).slice(0, 3),
      crosshair: {
        enabled: true,
        labelFormatter,
      },
      ...axisProps,
    },
    toolTip: {
      enabled: true,
      animationEnabled: true,
      content: `{y}`,
      backgroundColor: "#40BAFF",
      cornerRadius: 4,
      fontColor: "#FFFFFF",
      fontSize: 12,
    },
    data: [
      {
        highlightEnabled: false,
        cursor: "pointer",
        type: "splineArea",
        markerType: "circle",
        markerColor: "#40BAFF",
        markerBorderColor: "#FFFFFF",
        markerSize: 19,
        markerBorderThickness: 2,
        color: "rgba(64, 186, 255, 0.17)",
        fillOpacity: 0.36,
        dataPoints: data.map(({ value, date }) => ({
          x: new Date(date),
          y: value,
        })),
      },
    ],
  };
  return (
    <div className="flex flex-row gap-x-3 overflow-hidden">
      <CanvasJSChart options={options} />
    </div>
  );
}
