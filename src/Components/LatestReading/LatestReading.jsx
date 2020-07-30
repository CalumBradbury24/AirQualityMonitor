import React, { useState, useEffect } from "react";
import "./LatestReading.styles.scss";

const LatestReading = ({ reading }) => {
  const [PMOneStatus, setPMOneStatus] = useState("");
  const [PMTwoFiveStatus, setPMTwoFiveStatus] = useState("");
  const [PMTenStatus, setPMTenStatus] = useState("");

  useEffect(() => {
    if (reading.PMOne <= 35) {
      setPMOneStatus("Low");
    } else if (reading.PMOne <= 53) {
      setPMOneStatus("Moderate");
    } else if (reading.PMOne <= 70) {
      setPMOneStatus("High");
    } else {
      setPMOneStatus("Very high");
    }
    if (reading.PMTwoFive <= 35) {
      setPMTwoFiveStatus("Low");
    } else if (reading.PMTwoFive <= 53) {
      setPMTwoFiveStatus("Moderate");
    } else if (reading.PMTwoFive <= 70) {
      setPMTwoFiveStatus("High");
    } else {
      setPMTwoFiveStatus("Very high");
    }
    if (reading.PMTen <= 50) {
      setPMTenStatus("Low");
    } else if (reading.PMTen <= 75) {
      setPMTenStatus("Moderate");
    } else if (reading.PMTen <= 100) {
      setPMTenStatus("High");
    } else {
      setPMTenStatus("Very high");
    }
  }, [reading.PMOne, reading.PMTwoFive, reading.PMTen]);

  return (
    <div className="readings-container">
      <div className="reading-container">
        <h4 className="title">Sensor ID</h4>
        <span className="reading">{reading.SensorID}</span>
      </div>
      <div className="reading-container">
        <h4 className="title">
          Particulate Matter<sub>1.0</sub>
        </h4>
        <span className="reading">{reading.PMOne + " ug/m3"}</span>
        <span className="concentration">
          Concentration:<strong>{PMOneStatus}</strong>
        </span>
      </div>
      <div className="reading-container">
        <h4 className="title">
          Particulate Matter<sub>2.5</sub>
        </h4>
        <span className="reading">{reading.PMTwoFive + " ug/m3"}</span>
        <span className="concentration">
          Concentration:<strong>{PMTwoFiveStatus}</strong>
        </span>
      </div>
      <div className="reading-container">
        <h4 className="title">
          Particulate Matter<sub>10</sub>
        </h4>
        <span className="reading">{reading.PMTen + " ug/m3"}</span>
        <span className="concentration">
          Concentration: <strong>{PMTenStatus}</strong>
        </span>
      </div>
      <div className="reading-container">
        <h4 className="title">Temperature</h4>
        <span className="reading">{reading.TemperatureDHT11 + "\u00b0C"}</span>
      </div>
      <div className="reading-container">
        <h4 className="title">Humidity</h4>
        <span className="reading">{reading.HumidityDHT11 + "%"}</span>
      </div>
      <div className="reading-container">
        <h4 className="title">Date Of Reading</h4>
        <span className="reading">
          {reading.date.substring(0, 10)} {"@"} {reading.date.substring(11, 16)}
        </span>
      </div>
    </div>
  );
};
export default LatestReading;
