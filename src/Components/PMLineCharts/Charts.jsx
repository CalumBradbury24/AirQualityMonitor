import React from "react";
import { Line } from "react-chartjs-2";
import "./Charts.styles.scss";
import { connect } from "react-redux";

const Charts = ({ PMvalue, readings }) => {
  const getLineData = () => {
    var graphData = [];
    var labels = []; //Labels corresponding to graph data
    for (var i = 0; i < readings.length; i++) {
      graphData[i] = readings[i][PMvalue];
      labels[i] =
        readings[i].date.substring(8, 10) +
        "/" +
        readings[i].date.substring(5, 7) +
        "/" +
        readings[i].date.substring(0, 2) +
        " @ " +
        readings[i].date.substring(11, 16);
    }
    return {
      labels: labels,
      datasets: [
        {
          pointHoverRadius: 10,
          backgroundColor: "rgba(0,0,192,0.4)",
          borderColor: "#a00606",
          borderWidth: 1,
          data: graphData,
        },
      ],
    };
  };

  return (
    <div className="line-container">
      <div className="hist-graph-container">
        <Line
          data={getLineData()}
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
                  scaleLabel: {
                    display: true,
                    labelString: "Date (DD/MM/YY)",
                  },
                  ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                    autoSkip: true,
                    maxTicksLimit: 15,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    max: 100
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

export default connect(mapStateToProps)(React.memo(Charts));
