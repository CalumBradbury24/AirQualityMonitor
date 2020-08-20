import React from "react";
import "./HistoricalTableReadings.styles.scss";
//Render five latest readings
const HistoricalPMReadings = (props) => (
  <tr>
    <td>{props.data.SensorID}</td>
    <td>{props.data.PMOne}</td>
    <td>{props.data.PMTwoFive}</td>
    <td>{props.data.PMTen}</td>
    <td>{props.data.TemperatureDHT11}</td>
    <td>{props.data.HumidityDHT11}</td>
    {/* substring just gets the date part of the time string (excludes the timezone)*/}
    <td>
      {props.data.date.substring(8, 10)}
      {"-"}
      {props.data.date.substring(5, 7)}
      {"-"}
      {props.data.date.substring(0, 2)} {"@"}{" "}
      {props.data.date.substring(11, 16)}
    </td>
  </tr>
);

const PastReadingsTable = ({ reading }) => {
  const renderReadings = () => {
    const length = reading.length;
    return (
      <React.Fragment>
        {reading.slice(length-5, length).map((historicalReadings) => {
          return (
            <HistoricalPMReadings
              data={historicalReadings}
              key={historicalReadings._id}
            />
          );
        })}
      </React.Fragment>
    );
  };
  return (
    <table className="table-styles">
      <thead >
        <tr >
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
          <th>Temp {"\u00b0C"}</th>
          <th>Humidity (%)</th>
          <th>Date (DD-MM-YY)</th>
        </tr>
      </thead>
      <tbody>{renderReadings()}</tbody>
    </table>
  );
};

export default React.memo(PastReadingsTable);
