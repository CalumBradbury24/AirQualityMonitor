import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./PMLineCharts.styles.scss";

const PMLineCharts = ({ readingData }) => {
  const [selectGraph, setSelectGraph] = useState("PM1");

  const getLineData = (PMvalue) => {
    var graphData = []; 
    var labels = []; //Labels corresponding to graph data
    var counter = 10; 
    for (var i = 0; i < 10; i++) {
      //10 readings to display
      graphData[i] = readingData[readingData.length - counter][PMvalue];
      labels[i] =
        readingData[readingData.length - counter].date.substring(8, 10) +
        "-" +
        readingData[readingData.length - counter].date.substring(5, 7) +
        "-" +
        readingData[readingData.length - counter].date.substring(0, 2) +
        " @ " +
        readingData[readingData.length - counter].date.substring(11, 16);
      counter--;
    }
    return {
      labels: labels,
      datasets: [
        {
          backgroundColor: "rgba(75,192,192,0.4)",
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

export default React.memo(PMLineCharts);
