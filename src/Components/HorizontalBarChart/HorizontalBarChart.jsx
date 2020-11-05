import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import "./HorizontalBarChart.styles.scss";

import { connect } from "react-redux";

const HorizontalBarChart = ({ readings }) => {
  const getBarData = () => {
    return {
      labels: ["PM 1.0", "PM2.5", "PM10"],
      datasets: [
        {
          label: false,
          backgroundColor: ["#0316a4", "#ff9c02", "#eb34e2"],
          borderColor: "whitesmoke",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [readings[readings.length-1].PMOne, readings[readings.length-1].PMTwoFive, readings[readings.length-1].PMTen],
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
        <HorizontalBar  id="horizontal"
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

const mapStateToProps = (state) => {
  return {
    readings: state.data.readings,
  };
};

export default connect(mapStateToProps)(React.memo(HorizontalBarChart));
