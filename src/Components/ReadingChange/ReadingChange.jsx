import React from "react";
import "./readingChange.styles.scss";

const ReadingChange = ({ reading }) => {
  reading.reverse();

  const changes = () => {
    return (
      <div className="changes">
        <div className="change-container">
          <strong>
            PM<sub>1.0</sub>
          </strong>{" "}
          <div className="change">
            {result(reading[0].PMOne, reading[1].PMOne)}
          </div>{" "}
        </div>
        <div className="change-container">
          <strong>
            PM<sub>2.5</sub>
          </strong>{" "}
          <div className="change">
            {result(reading[0].PMTwoFive, reading[1].PMTwoFive)}
          </div>{" "}
        </div>
        <div className="change-container">
          <strong>
            PM<sub>10</sub>
          </strong>{" "}
          <div className="change">
            {result(reading[0].PMTen, reading[1].PMTen)}
          </div>{" "}
        </div>
        <div className="change-container">
          <strong>Temperature</strong>{" "}
          <div className="change">
            {result(reading[0].TemperatureDHT11, reading[1].TemperatureDHT11)}
          </div>{" "}
        </div>
        <div className="change-container">
          <strong>Humidity</strong>{" "}
          <div className="change">
            {result(reading[0].HumidityDHT11, reading[1].HumidityDHT11)}
          </div>{" "}
        </div>
      </div>
    );
  };

  const result = (var1, var2) => {
    let res = var1 - var2;
    return res > 0 ? "+" + res : res;
  };

  return (
    <div className="changes-container">
      <h4 className="title">Changes since last reading</h4>
      <div>{changes()}</div>
    </div>
  );
};

export default ReadingChange;
