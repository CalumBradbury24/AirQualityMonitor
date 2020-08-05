import React from "react";
import "./AverageReadings.styles.scss";
import { ReactComponent as ParticulateMatterLogo } from "../../assets/particles.svg";
import { ReactComponent as TempLogo } from "../../assets/temperature.svg";
import { ReactComponent as HumLogo } from "../../assets/humidity.svg";

const AverageReading = ({ data }) => {
  const length = data.length;

  const getAveragePM1 = () => {
    let result = 0;
    for (var x = 0; x < length; x++) {
      result += data[x].PMOne;
    }
    return result / length;
  };

  const getAveragePM2_5 = () => {
    let result = 0;
    for (var x = 0; x < length; x++) {
      result += data[x].PMTwoFive;
    }
    return result / length;
  };

  const getAveragePM10 = () => {
    let result = 0;
    for (var x = 0; x < length; x++) {
      result += data[x].PMTen;
    }
    return result / length;
  };

  const getAverageTemp = () => {
    let result = 0;
    for (var x = 0; x < length; x++) {
      result += data[x].TemperatureDHT11;
    }
    return result / length;
  };

  const getAverageHumidity = () => {
    let result = 0;
    for (var x = 0; x < length; x++) {
      result += data[x].HumidityDHT11;
    }
    return result / length;
  };
  return (
    <div className="averages-container">
      <h2 className="avg-title" style={{ backgroundColor: "#bfe6ff" }}>
        Average readings
      </h2>
      <div className="avg" style={{ backgroundColor: "#a6dcff" }}>
        <div className="avg-text">
          <h3 className="sub-title">
            PM<sub>1.0</sub>
          </h3>
          <p className="avg-reading">{getAveragePM1() + "(ug/m3)"}</p>
        </div>
        <ParticulateMatterLogo className="avg-images" />
      </div>
      <div className="avg" style={{ backgroundColor: "#8cd2ff" }}>
        <div className="avg-text">
          <h3 className="sub-title">
            PM<sub>2.5</sub>
          </h3>
          <p className="avg-reading"> {getAveragePM2_5() + "(ug/m3)"}</p>
        </div>
        <ParticulateMatterLogo className="avg-images" />
      </div>
      <div className="avg" style={{ backgroundColor: "#6bc5ff" }}>
      <div className="avg-text">
          <h3 className="sub-title">
            PM<sub>10</sub>
          </h3>
          <p className="avg-reading"> {getAveragePM10() + "(ug/m3)"}</p>
        </div>
        <ParticulateMatterLogo className="avg-images" />
      </div>
      <div className="avg" style={{ backgroundColor: "#40b4ff" }}>
      <div className="avg-text">
          <h3 className="sub-title">
             Temp 
          </h3>
          <p className="avg-reading"> {getAverageTemp() + "\u00b0C"}</p>
        </div>
        <TempLogo className="avg-images" />
      </div>
      <div className="avg" style={{ backgroundColor: "#14a3ff" }}>
      <div className="avg-text">
          <h3 className="sub-title">
             Humidity
          </h3>
          <p className="avg-reading"> {getAverageHumidity()+"%"}</p>
        </div>
        <HumLogo className="avg-images" />
      </div>
    </div>
  );
};

export default React.memo(AverageReading);
