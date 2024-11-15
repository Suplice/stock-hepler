import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { createChart, ColorType } from "lightweight-charts";

const chartOptions = {
  layout: {
    textColor: "black",
    background: { type: ColorType.Solid, color: "transparent" },
  },
};

const data = [
  { value: 0, time: "2022-01-17" },
  { value: 8, time: "2022-01-18" },
  { value: 10, time: "2022-01-19" },
  { value: 20, time: "2022-01-20" },
  { value: 3, time: "2022-01-21" },
  { value: 43, time: "2022-01-22" },
  { value: 41, time: "2022-01-23" },
  { value: 43, time: "2022-01-24" },
  { value: 56, time: "2022-01-25" },
  { value: 46, time: "2022-01-26" },
];

const Stock: React.FC = () => {
  // const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const chartContainer = document.getElementById("chart");
    if (!chartContainer) return;

    const chart = createChart(chartContainer, chartOptions);
    const areaSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });
    areaSeries.setData(data);
    chart.timeScale().fitContent();

    return () => chart.remove(); // Cleanup on unmount
  }, []);

  return <div id="chart" style={{ width: "100%", height: "1000px" }}></div>;
};

export default Stock;
