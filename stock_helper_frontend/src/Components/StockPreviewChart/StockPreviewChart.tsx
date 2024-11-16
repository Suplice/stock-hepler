import React, { useRef, useEffect, useState } from "react";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

const StockPreviewChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartInstance, setChartInstance] = useState<Chart | null>(null);
  useEffect(() => {
    if (!chartInstance || !chartRef.current) return;

    const data: ChartData = {
      datasets: [
        {
          label: "Sample Data",
          data: [10, 20, 15, 30, 25, 35],
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "rgba(75, 192, 192, 1)",
          fill: false,
          pointRadius: 0,
        },
      ],
    };

    const options: ChartOptions = {
      responsive: true,
      scales: {
        x: {
          display: false,
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
          display: false,
        },
      },
    };

    setChartInstance(
      new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: options,
      })
    );

    return () => {
      chartInstance?.destroy();
    };
  }, []);

  useEffect(() => {
    const now = Math.floor(Date.now() / 1000);
    const oneDayAgo = now - 86400;

    const retrieveData = async () => {
      const response = await fetch(
        `https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=60&from=${oneDayAgo}&to=${now}&token=csrpc79r01qj3u0orm70csrpc79r01qj3u0orm7g`
      );

      console.log("i am here");
      const data = await response.json();
      console.log(data);
    };

    retrieveData();
  }, []);

  return <canvas ref={chartRef} style={{ backgroundColor: "transparent" }} />;
};

export default StockPreviewChart;
