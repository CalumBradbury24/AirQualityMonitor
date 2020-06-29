import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./PieChart.styles.scss";

class Pie extends React.Component {
  calculatePercentage = (percent) => {
    const { reading } = this.props;
    //sum all = 208, divide individual value by sum and mulitple by 100, (90/208* 100 = 43%)
    //Cast strings as integers in order to sum
    let sum =
      Number(reading.PMOne) + Number(reading.PMTwoFive) + Number(reading.PMTen);
    let answer = (Number(percent) / sum) * 100; //Get answer
    return answer.toFixed(2); //Return answer to 2 decimal places
  };

  getPieData = () => {
    const { reading } = this.props;
    return [
      {
        title: " PM1.0 " + this.calculatePercentage(reading.PMOne) + "%", //Display percentage of particles in pie chart
        value: reading.PMOne,
        color: "#00035c",
      },
      {
        title: " PM2.5 " + this.calculatePercentage(reading.PMTwoFive) + "%",
        value: reading.PMTwoFive,
        color: "#c60052",
      },
      {
        title: "PM10. " + this.calculatePercentage(reading.PMTen) + "%",
        value: reading.PMTen,
        color: '#ffa600'
      },
    ];
  };

  render() {
    return (
      <div className="pie-wrapper">
        <div className="pie">
          <PieChart data={this.getPieData()} lineWidth={30} 
          startAngle={0}
          lengthAngle={-360} animate 
          rounded
          label={({ dataEntry }) => dataEntry.title.substring(0, 6)}
         // label={({ dataEntry }) => this.calculatePercentage(dataEntry.)}
          labelStyle={(index) => ({
            fill: this.getPieData()[index].color,
            fontSize: '5px',
            fontFamily:'Open Sans',
          })}
          labelPosition={60} 
        
        />
        </div>
      </div>
    );
  }
}

export default Pie;
