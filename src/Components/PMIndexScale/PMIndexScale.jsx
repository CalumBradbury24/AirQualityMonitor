import React from "react";
import { Bar } from "react-chartjs-2";
import "./PMIndexScale.styles.scss";
import IndexScale from "../IndexScale/IndexScale";

class PMIndexScale extends React.Component {

returnColour = (value) => {
  const { reading } = this.props;
  if (value === "PMOne") {
    if (reading.PMOne <= 11) {
      return 'rgb(163, 255, 171)';
    } else if (reading.PMOne <= 23) {
      return 'rgb(117, 255, 129)';
    } else if (reading.PMOne <= 35) {
      return 'rgba(10, 255, 2, 0.884)';
    } else if (reading.PMOne <= 41) {
      return 'yellow';
    } else if (reading.PMOne <= 47) {
      return ' rgb(255, 197, 36)';
    } else if (reading.PMOne <= 53) {
      return 'orange';
    } else if (reading.PMOne <= 58) {
      return 'rgb(255, 91, 91)';
    } else if (reading.PMOne <= 64) {
      return 'red';
    } else if (reading.PMOne <= 70) {
      return 'darkred';
    } else if (reading.PMOne > 70) {
      return 'rgb(158, 3, 158)';
    }
  }
  else if (value === "PMTwoFive") {
    if (reading.PMTwoFive <= 11) {
      return 'rgb(163, 255, 171)';
    } else if (reading.PMTwoFive <= 23) {
      return 'rgb(117, 255, 129)';
    } else if (reading.PMTwoFive <= 35) {
      return 'rgba(10, 255, 2, 0.884)';
    } else if (reading.PMTwoFive <= 41) {
      return 'yellow';
    } else if (reading.PMTwoFive <= 47) {
      return ' rgb(255, 197, 36)';
    } else if (reading.PMTwoFive <= 53) {
      return 'orange';
    } else if (reading.PMTwoFive <= 58) {
      return 'rgb(255, 91, 91)';
    } else if (reading.PMTwoFive <= 64) {
      return 'red';
    } else if (reading.PMTwoFive <= 70) {
      return 'darkred';
    } else if (reading.PMTwoFive > 70) {
      return 'rgb(158, 3, 158)';
    }
  } else {
    if (reading.PMTen <= 16) {
      return 'rgb(163, 255, 171)';
    } else if (reading.PMTen <= 33) {
      return 'rgb(117, 255, 129)';
    } else if (reading.PMTen <= 50) {
      return 'rgba(10, 255, 2, 0.884)';
    } else if (reading.PMTen <= 58) {
      return 'yellow';
    } else if (reading.PMTen <= 66) {
      return ' rgb(255, 197, 36)';
    } else if (reading.PMTen <= 75) {
      return 'orange';
    } else if (reading.PMTen <= 83) {
      return 'rgb(255, 91, 91)';
    } else if (reading.PMTen <= 91) {
      return 'red';
    } else if (reading.PMTen <= 100) {
      return 'darkred';
    } else if (reading.PMTen > 100) {
      return 'rgb(158, 3, 158)';
    }
  }
};
  returnValue = (value) => {
    const { reading } = this.props;
    if (value === "PMOne") {
      if (reading.PMOne <= 11) {
        return 1;
      } else if (reading.PMOne <= 23) {
        return 2;
      } else if (reading.PMOne <= 35) {
        return 3;
      } else if (reading.PMOne <= 41) {
        return 4;
      } else if (reading.PMOne <= 47) {
        return 5;
      } else if (reading.PMOne <= 53) {
        return 6;
      } else if (reading.PMOne <= 58) {
        return 7;
      } else if (reading.PMOne <= 64) {
        return 8;
      } else if (reading.PMOne <= 70) {
        return 9;
      } else if (reading.PMOne > 70) {
        return 10;
      }
    }
    else if (value === "PMTwoFive") {
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
    } else {
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
  };
  getData = () => {
    return {
      labels: ["PM1.0","PM2.5", "PM10"],
      datasets: [
        {
          label: false,
          backgroundColor: [this.returnColour('PMOne'), this.returnColour('PMTwoFive'), this.returnColour('PMTen')],
          borderColor: "whitesmoke",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [this.returnValue("PMOne"), this.returnValue("PMTwoFive"), this.returnValue("PMTen")],
        },
      ],
    };
  };

  render() {
    return (
      <div>
        <div className="bar-title">
          <strong>Air Quality Index Scale</strong>
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
                      suggestedMax: 10,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Index Band",
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <IndexScale />
      </div>
    );
  }
}

export default React.memo(PMIndexScale);
