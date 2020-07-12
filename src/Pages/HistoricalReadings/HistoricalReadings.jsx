import React from "react";
import axios from "axios";
import Spinner from "../../Components/spinner/spinner";
import { Line } from "react-chartjs-2";
import RenderHistoricalReadings from "../../Components/renderHistoricalReadings/renderHistoricalReadings";
import "./HistoricalReadings.styles.scss";

class HistoricalReadings extends React.Component {
  state = {
    readings: [], //Hold readings from MongoDB
    dataLoaded: false, //Is the data loaded?
    graphOption: "PM1", //Graph selection
  };

  componentDidMount = () => {
    axios
      .get("https://mysterious-sierra-11255.herokuapp.com/") //The port the backend server sits on
      .then((response) => {
        this.setState({ readings: response.data, dataLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderHistReadings = () => {
    const { readings } = this.state;
    return <RenderHistoricalReadings reading={readings} />;
  };

  getPM1LineData = () => {
    const { readings } = this.state;
    readings.reverse();
    var data =[];
    var decrement = 9;
    for(var i = 0; i<10; i++){//7 readings to display
      data[i] =  readings[decrement].PMOne
      decrement--;
    }
    return {
      labels: [
        readings[9].date.substring(5, 10) +
        "-" +
        readings[9].date.substring(0, 2) +
        " @ " +
        readings[9].date.substring(11, 16),
        readings[8].date.substring(5, 10) +
        "-" +
        readings[8].date.substring(0, 2) +
        " @ " +
        readings[8].date.substring(11, 16),
        readings[7].date.substring(5, 10) +
        "-" +
        readings[7].date.substring(0, 2) +
        " @ " +
        readings[7].date.substring(11, 16),
        readings[6].date.substring(5, 10) +
          "-" +
          readings[6].date.substring(0, 2) +
          " @ " +
          readings[6].date.substring(11, 16),
        readings[5].date.substring(5, 10) +
          "-" +
          readings[5].date.substring(0, 2) +
          " @ " +
          readings[5].date.substring(11, 16),
        readings[4].date.substring(5, 10) +
          "-" +
          readings[4].date.substring(0, 2) +
          " @ " +
          readings[4].date.substring(11, 16),
        readings[3].date.substring(5, 10) +
          "-" +
          readings[3].date.substring(0, 2) +
          " @ " +
          readings[3].date.substring(11, 16),
        readings[2].date.substring(5, 10) +
          "-" +
          readings[2].date.substring(0, 2) +
          " @ " +
          readings[2].date.substring(11, 16),
        readings[1].date.substring(5, 10) +
          "-" +
          readings[1].date.substring(0, 2) +
          " @ " +
          readings[1].date.substring(11, 16),
        readings[0].date.substring(5, 10) +
          "-" +
          readings[0].date.substring(0, 2) +
          " @ " +
          readings[0].date.substring(11, 16),
      ],
      datasets: [
        {
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "blue",
          borderWidth: 1,
          data: data,
        },
      ],
    };
  };
  getPM2LineData = () => {
    const { readings } = this.state;
    readings.reverse();
    var data =[];
    var decrement = 9;
    for(var i = 0; i<10; i++){//7 readings to display
      data[i] =  readings[decrement].PMTwoFive
      decrement--;
    }
    return {
      labels: [
        readings[9].date.substring(5, 10) +
        "-" +
        readings[9].date.substring(0, 2) +
        " @ " +
        readings[9].date.substring(11, 16),
        readings[8].date.substring(5, 10) +
        "-" +
        readings[8].date.substring(0, 2) +
        " @ " +
        readings[8].date.substring(11, 16),
        readings[7].date.substring(5, 10) +
        "-" +
        readings[7].date.substring(0, 2) +
        " @ " +
        readings[7].date.substring(11, 16),
        readings[6].date.substring(5, 10) +
          "-" +
          readings[6].date.substring(0, 2) +
          " @ " +
          readings[6].date.substring(11, 16),
        readings[5].date.substring(5, 10) +
          "-" +
          readings[5].date.substring(0, 2) +
          " @ " +
          readings[5].date.substring(11, 16),
        readings[4].date.substring(5, 10) +
          "-" +
          readings[4].date.substring(0, 2) +
          " @ " +
          readings[4].date.substring(11, 16),
        readings[3].date.substring(5, 10) +
          "-" +
          readings[3].date.substring(0, 2) +
          " @ " +
          readings[3].date.substring(11, 16),
        readings[2].date.substring(5, 10) +
          "-" +
          readings[2].date.substring(0, 2) +
          " @ " +
          readings[2].date.substring(11, 16),
        readings[1].date.substring(5, 10) +
          "-" +
          readings[1].date.substring(0, 2) +
          " @ " +
          readings[1].date.substring(11, 16),
        readings[0].date.substring(5, 10) +
          "-" +
          readings[0].date.substring(0, 2) +
          " @ " +
          readings[0].date.substring(11, 16),
      ],
      datasets: [
        {
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "blue",
          borderWidth: 1,
          data: data,
        },
      ],
    };
  };
  getPM10LineData = () => {
    const { readings } = this.state;
    readings.reverse();
    var data =[];
    var decrement = 9;
    for(var i = 0; i<10; i++){//7 readings to display
      data[i] =  readings[decrement].PMTen
      decrement--;
    }
    return {
      labels: [
        readings[9].date.substring(5, 10) +
        "-" +
        readings[9].date.substring(0, 2) +
        " @ " +
        readings[9].date.substring(11, 16),
        readings[8].date.substring(5, 10) +
        "-" +
        readings[8].date.substring(0, 2) +
        " @ " +
        readings[8].date.substring(11, 16),
        readings[7].date.substring(5, 10) +
        "-" +
        readings[7].date.substring(0, 2) +
        " @ " +
        readings[7].date.substring(11, 16),
        readings[6].date.substring(5, 10) +
          "-" +
          readings[6].date.substring(0, 2) +
          " @ " +
          readings[6].date.substring(11, 16),
        readings[5].date.substring(5, 10) +
          "-" +
          readings[5].date.substring(0, 2) +
          " @ " +
          readings[5].date.substring(11, 16),
        readings[4].date.substring(5, 10) +
          "-" +
          readings[4].date.substring(0, 2) +
          " @ " +
          readings[4].date.substring(11, 16),
        readings[3].date.substring(5, 10) +
          "-" +
          readings[3].date.substring(0, 2) +
          " @ " +
          readings[3].date.substring(11, 16),
        readings[2].date.substring(5, 10) +
          "-" +
          readings[2].date.substring(0, 2) +
          " @ " +
          readings[2].date.substring(11, 16),
        readings[1].date.substring(5, 10) +
          "-" +
          readings[1].date.substring(0, 2) +
          " @ " +
          readings[1].date.substring(11, 16),
        readings[0].date.substring(5, 10) +
          "-" +
          readings[0].date.substring(0, 2) +
          " @ " +
          readings[0].date.substring(11, 16),
      ],
      datasets: [
        {
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "blue",
          borderWidth: 1,
          data: data
        },
      ],
    };
  };

  handleClick = (event) => () => {
    this.setState({ graphOption: event });
    console.log(event);
  };

  render() {
    const { dataLoaded, graphOption } = this.state;
    return !dataLoaded === true ? (
      <div className="loading">
        <p className="loading-message">
          <strong>Loading data from server...</strong>
        </p>
        <div className="spinner">
          <Spinner />
        </div>
      </div>
    ) : (
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
            <div className = 'hist-graph-container'>
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
            <div className='hist-graph-container'>
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
            <div className='hist-graph-container'>
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

export default HistoricalReadings;
