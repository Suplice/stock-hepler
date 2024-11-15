import React, { useRef, useEffect } from "react";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

const StockPreviewChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!chartRef.current) return;

    const data: ChartData = {
      labels: ["", "", "", "", "", ""], // Empty labels to hide x-axis values
      datasets: [
        {
          label: "Sample Data",
          data: [10, 20, 15, 30, 25, 35], // Few data points
          backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background for bars or points
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "rgba(75, 192, 192, 1)",
          fill: false, // Line chart with no fill below
          pointRadius: 0, // No points on the line
        },
      ],
    };

    const options: ChartOptions = {
      responsive: true,
      scales: {
        x: {
          display: false, // Hide x-axis
        },
        y: {
          beginAtZero: false,
          grid: {
            color: "transparent",
            lineWidth: 0,
          },
          border: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide legend if you don't need it
        },
      },
    };

    const chartInstance = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} style={{ backgroundColor: "transparent" }} />;
};

export default StockPreviewChart;
