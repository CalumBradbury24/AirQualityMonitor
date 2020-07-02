import React from "react";
import { Bar } from "react-chartjs-2";
import "./PMIndexScale.styles.scss";

class PMIndexScale extends React.Component {
  returnValue = (value) => {
    const { reading } = this.props;
    if (value === "PMTwoFive") {
      if (reading.PMTwoFive <= 11) {
        return 1;
      } else if (reading.PMTwoFive <= 23) {
        return 2;
      } else if (reading.PMTwoFive <= 35) {
        return 3;
      } else if (reading.PMTwoFive <= 41) {
        return 4;
      } else if (reading.PMTwoFive <= 47) {
        return 5;
      } else if (reading.PMTwoFive <= 53) {
        return 6;
      } else if (reading.PMTwoFive <= 58) {
        return 7;
      } else if (reading.PMTwoFive <= 64) {
        return 8;
      } else if (reading.PMTwoFive <= 70) {
        return 9;
      } else if (reading.PMTwoFive > 70) {
        return 10;
      }
    }else{
      if (reading.PMTen <= 16) {
        return 1;
      } else if (reading.PMTen <= 33) {
        return 2;
      } else if (reading.PMTen <= 50) {
        return 3;
      } else if (reading.PMTen <= 58) {
        return 4;
      } else if (reading.PMTen <= 66) {
        return 5;
      } else if (reading.PMTen <= 75) {
        return 6;
      } else if (reading.PMTen <= 83) {
        return 7;
      } else if (reading.PMTen <= 91) {
        return 8;
      } else if (reading.PMTen <= 100) {
        return 9;
      } else if (reading.PMTen > 100) {
        return 10;
      }
    }
    }
  getData = () => {
    return {
      labels: ["PM2.5", "PM10"],
      datasets: [
        {
          label: false,
          backgroundColor: ["#c60052", "#ffa600"],
          borderColor: "whitesmoke",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [this.returnValue("PMTwoFive"), this.returnValue("PMTen")]
        },
      ],
    };
  };

  render() {
    return (
      <div>
        <div className="bar-title">
          <strong>Daily Air Quality Index Scale</strong>
        </div>
        <div className="singleBar-container ">
          {" "}
          <Bar
            data={this.getData()}
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
                yAxes: [
                  {
                    ticks: {
                     beginAtZero: true,
                     suggestedMax: 10
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Index'
                    }
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default PMIndexScale;
