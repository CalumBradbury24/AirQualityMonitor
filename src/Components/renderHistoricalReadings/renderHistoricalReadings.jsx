import React from "react";
import "./renderHistoricalReadings.styles.scss";

const HistoricalPMOneReadings = (props) => (
  <tr>
    <td >{props.data.SensorID}</td>
    <td >{props.data.PMOne}</td>
    <td >{props.data.PMTwoFive}</td>
    <td> {props.data.PMTen}</td>
    <td >{props.data.TemperatureDHT11}</td>
    <td >{props.data.HumidityDHT11}</td>
    {/* substring just gets the date part of the time string (excludes the timezone)*/}
    <td >
      {props.data.date.substring(0, 10)} {"@"}{" "}
      {props.data.date.substring(11, 16)}
    </td>
  </tr>
);

class RenderHistoricalReading extends React.Component {
  renderReadings = () => {
    const { reading } = this.props;
    reading.reverse();
    return (
      <React.Fragment>
        {reading.slice(0, 5).map((historicalReadings) => {
          return (
            <HistoricalPMOneReadings
              data={historicalReadings}
              key={historicalReadings._id}
            />
          );
        })}
      </React.Fragment>
    );
  };

  render() {
    return (
      <table className="">
        <thead className="">
          <tr className="">
            <th>Sensor ID</th>
            <th>
              PM<sub>1.0</sub> (ug/m3)
            </th>
            <th>
             PM<sub>2.5</sub> (ug/m3)
            </th>
            <th>
            PM<sub>10</sub> (ug/m3)
            </th>
            <th>Temp {'\u00b0C'}</th>
            <th>Humidity (%)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{this.renderReadings()}</tbody>
      </table>
    );
  }
}

export default RenderHistoricalReading;
