export const chartOptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Price ($)",
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      title: {
        display: true,
        text: "Ratio",
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  maintainAspectRatio: false,
};
