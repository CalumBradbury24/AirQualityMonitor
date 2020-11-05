import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import "./CustomChart.styles.scss";

const CustomChart = ({ readings, modalOption }) => {
  const getLineData = () => {
    var graphData = [];
    var labels = []; //Labels corresponding to graph data
    var filteredReadings = readings.filter((element, index) => {
      return index % 2 !== 0;
    });

    for (var i = 0; i < filteredReadings.length; i++) {
      graphData[i] = filteredReadings[i][modalOption].toFixed(2);
      labels[i] =
        filteredReadings[i].date.substring(8, 10) +
        "/" +
        filteredReadings[i].date.substring(5, 7) +
        "/" +
        filteredReadings[i].date.substring(0, 2) +
        " @ " +
        filteredReadings[i].date.substring(11, 16);
    }
    return {
      labels: labels,
      datasets: [
        {
          fill: true,
          pointBackgroundColor: "#a00606",
          pointHoverRadius: 7,
          backgroundColor: "#98eaff",
          borderColor: "#a00606",
          borderWidth: 1,
          data: graphData,
        },
      ],
    };
  };

  const getYAxisLabel = () => {
    let yaxis = "";
    switch (modalOption) {
      case "PMOne":
        yaxis = "Concentration (ug/m3)";
        break;
      case "PMTwoFive":
        yaxis = "Concentration (ug/m3)";
        break;
      case "PMTen":
        yaxis = "Concentration (ug/m3)";
        break;
      case "TemperatureDHT11":
        yaxis = "Temperature (\u00b0C)";
        break;
      case "HumidityDHT11":
        yaxis = "Humidity (%)";
        break;
      default:
        break;
    }
    return yaxis;
  };

  const getMaxYAxis = () => {
    let max = "";
    switch (modalOption) {
      case "TemperatureDHT11":
        max = 40;
        break;
      default:
        max = 100;
    }
    return max;
  };

  return (
    <div className="custom-chart-container">
        <Line
          data={getLineData}
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
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Date (DD/MM/YY)",
                  },
                  ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                    autoSkip: true,
                    maxTicksLimit: 5,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    max: getMaxYAxis(),
                  },
                  scaleLabel: {
                    display: true,
                    labelString: getYAxisLabel(),
                  },
                },
              ],
            },
          }}
        />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    readings: state.data.readings,
    modalOption: state.modal.modalOption,
  };
};

export default connect(mapStateToProps)(React.memo(CustomChart));
