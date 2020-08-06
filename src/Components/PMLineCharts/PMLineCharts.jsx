import React from "react";
import { Line } from "react-chartjs-2";
import './PMLineCharts.styles.scss';

//Functional components always re-render whenever the parent re-renders, thus it can cause too many re-renders if the parent re-renders a lot
class PMLineCharts extends React.Component {

state = {
  graphOption: "PM1", //Graph selection
};

getPM1LineData = () => {
  const { readings } = this.props;
  
  var graphData = [];//Graph data 
  var labels = [];//Labels corresponding to graph data
  var decrement = 9;//Counter
  for (var i = 0; i < 10; i++) {//10 readings to display
    graphData[i] = readings[decrement].PMOne;
    labels[i] =
    readings[decrement].date.substring(5, 10) +
      "-" +
      readings[decrement].date.substring(0, 2) +
      " @ " +
      readings[decrement].date.substring(11, 16);
    decrement--;
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

getPM2LineData = () => {
  const { readings } = this.props;
  var graphData = [];
  var labels=[];
  var decrement = 9;
  for (var i = 0; i < 10; i++) {
    graphData[i] = readings[decrement].PMTwoFive;
    labels[i] =
    readings[decrement].date.substring(5, 10) +
      "-" +
      readings[decrement].date.substring(0, 2) +
      " @ " +
      readings[decrement].date.substring(11, 16);
    decrement--;
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

getPM10LineData = () => {
  const { readings } = this.props;
  var graphData = [];
  var labels=[];
  var decrement = 9;
  for (var i = 0; i < 10; i++) {
    graphData[i] = readings[decrement].PMTen;
    labels[i] =
    readings[decrement].date.substring(5, 10) +
      "-" +
      readings[decrement].date.substring(0, 2) +
      " @ " +
      readings[decrement].date.substring(11, 16);
    decrement--;
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

handleClick = (event) => () => {
  this.setState({ graphOption: event });
  console.log(event);
};
render() {
  const { graphOption } = this.state;
  return (
    <div>
      <h2 className ='graphs-title'>PM Readings over time</h2>
      <div className="graph-selector">
        <h4
          className={
            "on-hover " + (graphOption === "PM1" ? "blue" : "default")
          }
          onClick={this.handleClick("PM1")}
        >
          PM<sub>1.0</sub>
        </h4>
        <h4
          className={
            "on-hover " + (graphOption === "PM2" ? "blue" : "default")
          }
          onClick={this.handleClick("PM2")}
        >
          PM<sub>2.5</sub>
        </h4>
        <h4
          className={
            "on-hover " + (graphOption === "PM10" ? "blue" : "default")
          }
          onClick={this.handleClick("PM10")}
        >
          PM<sub>10</sub>
        </h4>
      </div>
      <div className="line-container">
        {graphOption === "PM1" ? (
          <div className="hist-graph-container">
            <Line
              data={this.getPM1LineData()}
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
        ) : graphOption === "PM2" ? (
          <div className="hist-graph-container">
            {" "}
            <Line
              data={this.getPM2LineData()}
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
              data={this.getPM10LineData()}
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
}
};

export default React.memo(PMLineCharts);
