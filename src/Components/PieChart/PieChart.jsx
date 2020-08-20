import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./PieChart.styles.scss";

const Pie = ( {reading }) => {

  const calculatePercentage = (value) => {
    //sum all, divide individual value by sum and mulitple by 100, (90/208* 100 = 43%)
    //Cast strings as integers in order to sum
    let sum =
      Number(reading.PMOne) + Number(reading.PMTwoFive) + Number(reading.PMTen);
    let answer = (Number(value) / sum) * 100; //Get answer
    return answer.toFixed(2); //Return answer to 2 decimal places
  };

  const getPieData = () => {
    return [
      {
        title: " PM1.0 " + calculatePercentage(reading.PMOne) + "%", //Display percentage of particles in pie chart
        value: reading.PMOne,
        color: "#34dbeb",
      },
      {
        title: " PM2.5 " + calculatePercentage(reading.PMTwoFive) + "%",
        value: reading.PMTwoFive,
        color: "#99eb34",
      },
      {
        title: "PM10. " + calculatePercentage(reading.PMTen) + "%",
        value: reading.PMTen,
        color: "#eb34e2",
      },
    ];
  };

  return(
    <div className = 'content'>
        <div className="bar-title">
          <strong>PM concentration per cubic meter of air (%)</strong>
        </div>
        <div className="pie-wrapper">
          <div className="pie">
            <PieChart
              data={getPieData()}
              lineWidth={30}
              startAngle={0}
              lengthAngle={-360}
              animate
              rounded
              label={({ dataEntry }) => dataEntry.title.substring(0, 6)}
              labelStyle={(index) => ({
                fill: getPieData()[index].color,
                fontSize: "5px",
                fontFamily: "Open Sans",
              })}
              labelPosition={60}
            />
          </div>
        </div>
      </div>
  )
}

export default React.memo(Pie);
