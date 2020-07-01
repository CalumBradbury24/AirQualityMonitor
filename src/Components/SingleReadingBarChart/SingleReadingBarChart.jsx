import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import "./SingleReadingBarChart.styles.scss";

class SingleReadingBarChart extends React.Component {
  getSingleReadingBarData = () => {
    const { reading } = this.props;
    return {
      labels: ["PM 1.0", "PM2.5", "PM10"],
      datasets: [
        {
          label: false,
          backgroundColor: ["#00035c", "#c60052", "#ffa600"],
          borderColor: "whitesmoke",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [reading.PMOne, reading.PMTwoFive, reading.PMTen],
          // yAxisID: "y-axis-1",
        },
      ],
    };
  };

  render() {
    return (
      <div>
        <div className="bar-title">
          <strong>
            PM concentration per cubic meter of air (ug/m3)
          </strong>
        </div>
        <div className="chart-container ">
          <HorizontalBar
            data={this.getSingleReadingBarData()}
            options={{
              responsive: true,
              aspectRatio: 1,
              // maintainAspectRatio: true,
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
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
export default SingleReadingBarChart;
