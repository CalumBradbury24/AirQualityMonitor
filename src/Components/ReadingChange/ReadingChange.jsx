import React from "react";
import "./readingChange.styles.scss";

const result = (var1, var2) => {
  let res = var1 - var2;
  return (res > 0) ? "+" + res : res;
};

const changes = (props) => {
  props.reverse();
  return (
    <div className="changes">
      <div className="change-container">
        <strong>
          PM<sub>1.0</sub>
        </strong>{" "}
        <div className="change">{result(props[0].PMOne, props[1].PMOne)}</div>{" "}
      </div>
      <div className="change-container">
        <strong>
          PM<sub>2.5</sub>
        </strong>{" "}
        <div className="change">{result(props[0].PMTwoFive, props[1].PMTwoFive)}</div>{" "}
      </div>
      <div className="change-container">
        <strong>
          PM<sub>10</sub>
        </strong>{" "}
        <div className="change">{result(props[0].PMTen, props[1].PMTen)}</div>{" "}
      </div>
      <div className="change-container">
        <strong>Temperature</strong>{" "}
        <div className="change">
          {result(props[0].TemperatureDHT11, props[1].TemperatureDHT11)}
        </div>{" "}
      </div>
      <div className="change-container">
        <strong>Humidity</strong>{" "}
        <div className="change">
          {result(props[0].HumidityDHT11, props[1].HumidityDHT11)}
        </div>{" "}
      </div>
    </div>
  );
};

const ReadingChange = ({ reading }) => {
  return (
    <div className="changes-container">
      <h4 className="title">Changes since last reading</h4>
      <div>{changes(reading)}</div>
    </div>
  );
};

export default ReadingChange;
