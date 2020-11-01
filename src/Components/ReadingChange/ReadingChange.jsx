import React from "react";
import "./readingChange.styles.scss";
import { connect } from "react-redux";

const ReadingChange = ({ readings }) => {
  const changes = () => {
    return (
      <div className="changes">
        <div className="">
          <strong>
            PM<sub>1.0</sub>
          </strong>{" "}
          <div className="change">
            {result(
              readings[readings.length - 1].PMOne,
              readings[readings.length - 2].PMOne
            ) + " ug/m3"}
          </div>{" "}
        </div>
        <div className="">
          <strong>
            PM<sub>2.5</sub>
          </strong>{" "}
          <div className="change">
            {result(
              readings[readings.length - 1].PMTwoFive,
              readings[readings.length - 2].PMTwoFive
            ) + " ug/m3"}
          </div>{" "}
        </div>
        <div>
          <strong>
            PM<sub>10</sub>
          </strong>{" "}
          <div className="change">
            {result(
              readings[readings.length - 1].PMTen,
              readings[readings.length - 2].PMTen
            ) + " ug/m3"}
          </div>{" "}
        </div>
        <div>
          <strong>Temperature</strong>{" "}
          <div className="change">
            {result(
              readings[readings.length - 1].TemperatureDHT11,
              readings[readings.length - 2].TemperatureDHT11
            ) + "\u00b0C"}
          </div>{" "}
        </div>
        <div>
          <strong>Humidity</strong>{" "}
          <div className="change">
            {result(
              readings[readings.length - 1].HumidityDHT11,
              readings[readings.length - 2].HumidityDHT11
            ) + "%"}
          </div>{" "}
        </div>
      </div>
    );
  };

  const result = (var1, var2) => {
    let res = var1 - var2;
    return (res > 0 ? "+" + res.toFixed(2) : res.toFixed(2));
  };

  return (
    <div className="changes-container">
      <h4 className="changes-title">Changes since last reading</h4>
      <div>{changes()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    readings: state.data.readings,
  };
};

export default connect(mapStateToProps)(ReadingChange);
