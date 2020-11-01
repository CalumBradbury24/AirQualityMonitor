import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./PMLineCharts.styles.scss";
import { connect } from "react-redux";

const PMLineCharts = ({ readings }) => {
  const [selectGraph, setSelectGraph] = useState("PM1");

  const getLineData = (PMvalue) => {
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
          backgroundColor: "rgba(0,0,192,0.4)",
          borderColor: "blue",
          borderWidth: 1,
          data: graphData,
        },
      ],
    };
  };

  const handleClick = (event) => () => {
    setSelectGraph(event);
  };

  return (
    <div>
      <h2 className="graphs-title">PM Readings over time</h2>
      <div className="graph-selector">
        <h4
          className={"on-hover " + (selectGraph === "PM1" ? "blue" : "default")}
          onClick={handleClick("PM1")}
        >
          PM<sub>1.0</sub>
        </h4>
        <h4
          className={"on-hover " + (selectGraph === "PM2" ? "blue" : "default")}
          onClick={handleClick("PM2")}
        >
          PM<sub>2.5</sub>
        </h4>
        <h4
          className={
            "on-hover " + (selectGraph === "PM10" ? "blue" : "default")
          }
          onClick={handleClick("PM10")}
        >
          PM<sub>10</sub>
        </h4>
      </div>
      <div className="line-container">
        {selectGraph === "PM1" ? (
          <div className="hist-graph-container">
            <Line
              data={getLineData("PMOne")}
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
                        labelString: "Date (DD-MM-YY)",
                      },
                      ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                      },
                    },
                  ],
                  yAxes: [
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
        ) : selectGraph === "PM2" ? (
          <div className="hist-graph-container">
            {" "}
            <Line
              data={getLineData("PMTwoFive")}
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
                        labelString: "Date (DD-MM-YY)",
                      },
                      ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                      },
                    },
                  ],
                  yAxes: [
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
        ) : (
          <div className="hist-graph-container">
            {" "}
            <Line
              data={getLineData("PMTen")}
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
                        labelString: "Date (DD-MM-YY)",
                      },
                      ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                      },
                    },
                  ],
                  yAxes: [
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
            />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    readings: state.data.readings,
  };
};

export default connect(mapStateToProps)(React.memo(PMLineCharts));
