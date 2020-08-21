import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./PieChart.styles.scss";

import { connect } from 'react-redux';

const Pie = ({ readings }) => {

  const calculatePercentage = (value) => {
    //sum all, divide individual value by sum and mulitple by 100, (90/208* 100 = 43%)
    //Cast strings as integers in order to sum
    let sum =
      Number(readings[readings.length-1].PMOne) + Number(readings[readings.length-1].PMTwoFive) + Number(readings[readings.length-1].PMTen);
    let answer = (Number(value) / sum) * 100; //Get answer
    return answer.toFixed(2); //Return answer to 2 decimal places
  };

  const getPieData = () => {
    return [
      {
        title: " PM1.0 " + calculatePercentage(readings[readings.length-1].PMOne) + "%", //Display percentage of particles in pie chart
        value: readings[readings.length-1].PMOne,
        color: "#34dbeb",
      },
      {
        title: " PM2.5 " + calculatePercentage(readings[readings.length-1].PMTwoFive) + "%",
        value: readings[readings.length-1].PMTwoFive,
        color: "#99eb34",
      },
      {
        title: "PM10. " + calculatePercentage(readings[readings.length-1].PMTen) + "%",
        value: readings[readings.length-1].PMTen,
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

const mapStateToProps = (state) => {
  return {
    readings: state.data.readings,
  };
};

export default connect(mapStateToProps)(React.memo(Pie));
