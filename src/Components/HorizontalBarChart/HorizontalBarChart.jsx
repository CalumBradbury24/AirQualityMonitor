import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import "./HorizontalBarChart.styles.scss";

const HorizontalBarChart = ({ reading }) => {
  const getBarData = () => {
    return {
      labels: ["PM 1.0", "PM2.5", "PM10"],
      datasets: [
        {
          label: false,
          backgroundColor: ["#34dbeb", "#99eb34", "#eb34e2"],
          borderColor: "whitesmoke",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [reading.PMOne, reading.PMTwoFive, reading.PMTen],
        },
      ],
    };
  };

  return (
    <div>
      <div className="bar-title">
        <strong>PM concentration per cubic meter of air (ug/m3)</strong>
      </div>
      <div className="chart-container ">
        <HorizontalBar
          data={getBarData()}
          options={{
            responsive: true,
            aspectRatio: 1,
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Concentration (ug/m3)",
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default HorizontalBarChart;
