import React from "react";
import { Bar } from "react-chartjs-2";
import "./PMIndexScale.styles.scss";
import IndexScale from "../IndexScale/IndexScale";

import { connect } from 'react-redux';

const PMIndexScale = ({readings}) => {

const returnColour = (value) => {
  if (value === "PMOne") {
    if (readings[readings.length-1].PMOne <= 11) {
      return 'rgb(163, 255, 171)';
    } else if (readings[readings.length-1].PMOne <= 23) {
      return 'rgb(117, 255, 129)';
    } else if (readings[readings.length-1].PMOne <= 35) {
      return 'rgba(10, 255, 2, 0.884)';
    } else if (readings[readings.length-1].PMOne <= 41) {
      return 'yellow';
    } else if (readings[readings.length-1].PMOne <= 47) {
      return ' rgb(255, 197, 36)';
    } else if (readings[readings.length-1].PMOne <= 53) {
      return 'orange';
    } else if (readings[readings.length-1].PMOne <= 58) {
      return 'rgb(255, 91, 91)';
    } else if (readings[readings.length-1].PMOne <= 64) {
      return 'red';
    } else if (readings[readings.length-1].PMOne <= 70) {
      return 'darkred';
    } else if (readings[readings.length-1].PMOne > 70) {
      return 'rgb(158, 3, 158)';
    }
  }
  else if (value === "PMTwoFive") {
    if (readings[readings.length-1].PMTwoFive <= 11) {
      return 'rgb(163, 255, 171)';
    } else if (readings[readings.length-1].PMTwoFive <= 23) {
      return 'rgb(117, 255, 129)';
    } else if (readings[readings.length-1].PMTwoFive <= 35) {
      return 'rgba(10, 255, 2, 0.884)';
    } else if (readings[readings.length-1].PMTwoFive <= 41) {
      return 'yellow';
    } else if (readings[readings.length-1].PMTwoFive <= 47) {
      return ' rgb(255, 197, 36)';
    } else if (readings[readings.length-1].PMTwoFive <= 53) {
      return 'orange';
    } else if (readings[readings.length-1].PMTwoFive <= 58) {
      return 'rgb(255, 91, 91)';
    } else if (readings[readings.length-1].PMTwoFive <= 64) {
      return 'red';
    } else if (readings[readings.length-1].PMTwoFive <= 70) {
      return 'darkred';
    } else if (readings[readings.length-1].PMTwoFive > 70) {
      return 'rgb(158, 3, 158)';
    }
  } else {
    if (readings[readings.length-1].PMTen <= 16) {
      return 'rgb(163, 255, 171)';
    } else if (readings[readings.length-1].PMTen <= 33) {
      return 'rgb(117, 255, 129)';
    } else if (readings[readings.length-1].PMTen <= 50) {
      return 'rgba(10, 255, 2, 0.884)';
    } else if (readings[readings.length-1].PMTen <= 58) {
      return 'yellow';
    } else if (readings[readings.length-1].PMTen <= 66) {
      return ' rgb(255, 197, 36)';
    } else if (readings[readings.length-1].PMTen <= 75) {
      return 'orange';
    } else if (readings[readings.length-1].PMTen <= 83) {
      return 'rgb(255, 91, 91)';
    } else if (readings[readings.length-1].PMTen <= 91) {
      return 'red';
    } else if (readings[readings.length-1].PMTen <= 100) {
      return 'darkred';
    } else if (readings[readings.length-1].PMTen > 100) {
      return 'rgb(158, 3, 158)';
    }
  }
};
  const returnValue = (value) => {
    if (value === "PMOne") {
      if (readings[readings.length-1].PMOne <= 11) {
        return 1;
      } else if (readings[readings.length-1].PMOne <= 23) {
        return 2;
      } else if (readings[readings.length-1].PMOne <= 35) {
        return 3;
      } else if (readings[readings.length-1].PMOne <= 41) {
        return 4;
      } else if (readings[readings.length-1].PMOne <= 47) {
        return 5;
      } else if (readings[readings.length-1].PMOne <= 53) {
        return 6;
      } else if (readings[readings.length-1].PMOne <= 58) {
        return 7;
      } else if (readings[readings.length-1].PMOne <= 64) {
        return 8;
      } else if (readings[readings.length-1].PMOne <= 70) {
        return 9;
      } else if (readings[readings.length-1].PMOne > 70) {
        return 10;
      }
    }
    else if (value === "PMTwoFive") {
      if (readings[readings.length-1].PMTwoFive <= 11) {
        return 1;
      } else if (readings[readings.length-1].PMTwoFive <= 23) {
        return 2;
      } else if (readings[readings.length-1].PMTwoFive <= 35) {
        return 3;
      } else if (readings[readings.length-1].PMTwoFive <= 41) {
        return 4;
      } else if (readings[readings.length-1].PMTwoFive <= 47) {
        return 5;
      } else if (readings[readings.length-1].PMTwoFive <= 53) {
        return 6;
      } else if (readings[readings.length-1].PMTwoFive <= 58) {
        return 7;
      } else if (readings[readings.length-1].PMTwoFive <= 64) {
        return 8;
      } else if (readings[readings.length-1].PMTwoFive <= 70) {
        return 9;
      } else if (readings[readings.length-1].PMTwoFive > 70) {
        return 10;
      }
    } else {
      if (readings[readings.length-1].PMTen <= 16) {
        return 1;
      } else if (readings[readings.length-1].PMTen <= 33) {
        return 2;
      } else if (readings[readings.length-1].PMTen <= 50) {
        return 3;
      } else if (readings[readings.length-1].PMTen <= 58) {
        return 4;
      } else if (readings[readings.length-1].PMTen <= 66) {
        return 5;
      } else if (readings[readings.length-1].PMTen <= 75) {
        return 6;
      } else if (readings[readings.length-1].PMTen <= 83) {
        return 7;
      } else if (readings[readings.length-1].PMTen <= 91) {
        return 8;
      } else if (readings[readings.length-1].PMTen <= 100) {
        return 9;
      } else if (readings[readings.length-1].PMTen > 100) {
        return 10;
      }
    }
  };
 const getData = () => {
    return {
      labels: ["PM1.0","PM2.5", "PM10"],
      datasets: [
        {
          label: false,
          backgroundColor: [returnColour('PMOne'), returnColour('PMTwoFive'), returnColour('PMTen')],
          borderColor: "whitesmoke",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [returnValue("PMOne"), returnValue("PMTwoFive"), returnValue("PMTen")],
        },
      ],
    };
  };

    return (
      <div>
        <div className="bar-title">
          <strong>Air Quality Index Scale</strong>
        </div>
        <div className="singleBar-container ">
          {" "}
          <Bar id='PM'
            data={getData}
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

const mapStateToProps = (state) => {
  return {
    readings: state.data.readings,
  };
};

export default connect(mapStateToProps)(React.memo(PMIndexScale));
