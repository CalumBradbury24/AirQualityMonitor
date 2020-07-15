import React from "react";
import { Line } from "react-chartjs-2";
import RenderHistoricalReadings from "../../Components/renderHistoricalReadings/renderHistoricalReadings";
import "./HistoricalReadings.styles.scss";

import withData from "../../withData";

class HistoricalReadings extends React.Component {
  state = {
    graphOption: "PM1", //Graph selection
  };

  renderHistReadings = () => {
    const { data } = this.props;
    return <RenderHistoricalReadings reading={data} />;
  };

  getPM1LineData = () => {
    const { data } = this.props;
    data.reverse();
    var graphData = [];//Graph data 
    var labels = [];//Labels corresponding to grapg data
    var decrement = 9;//Counter
    for (var i = 0; i < 10; i++) {//10 readings to display
      graphData[i] = data[decrement].PMOne;
      labels[i] =
        data[decrement].date.substring(5, 10) +
        "-" +
        data[decrement].date.substring(0, 2) +
        " @ " +
        data[decrement].date.substring(11, 16);
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
    const { data } = this.props;
    data.reverse();
    var graphData = [];
    var labels=[];
    var decrement = 9;
    for (var i = 0; i < 10; i++) {
      graphData[i] = data[decrement].PMTwoFive;
      labels[i] =
        data[decrement].date.substring(5, 10) +
        "-" +
        data[decrement].date.substring(0, 2) +
        " @ " +
        data[decrement].date.substring(11, 16);
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
    const { data } = this.props;
    data.reverse();
    var graphData = [];
    var labels=[];
    var decrement = 9;
    for (var i = 0; i < 10; i++) {
      graphData[i] = data[decrement].PMTen;
      labels[i] =
        data[decrement].date.substring(5, 10) +
        "-" +
        data[decrement].date.substring(0, 2) +
        " @ " +
        data[decrement].date.substring(11, 16);
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
      <div className="Historical-page ">
        {this.renderHistReadings()}
        <div className="graph-selector">
          <h4
            className={
              "on-hover " + (graphOption === "PM1" ? "orange-red" : "default")
            }
            onClick={this.handleClick("PM1")}
          >
            PM<sub>1.0</sub>
          </h4>
          <h4
            className={
              "on-hover " + (graphOption === "PM2" ? "orange-red" : "default")
            }
            onClick={this.handleClick("PM2")}
          >
            PM<sub>2.5</sub>
          </h4>
          <h4
            className={
              "on-hover " + (graphOption === "PM10" ? "orange-red" : "default")
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
}

export default withData(HistoricalReadings);
