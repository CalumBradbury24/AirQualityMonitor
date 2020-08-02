import React, { useState, useEffect } from "react";
import "./LatestReading.styles.scss";
import { ReactComponent as ParticulateMatterLogo } from "../../assets/particles.svg";
import { ReactComponent as TempLogo } from '../../assets/temperature.svg';
import { ReactComponent as HumLogo } from '../../assets/humidity.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Sensing } from '../../assets/sensor.svg';

const LatestReading = ({ reading }) => {
  const [PMOneStatus, setPMOneStatus] = useState("");
  const [PMTwoFiveStatus, setPMTwoFiveStatus] = useState("");
  const [PMTenStatus, setPMTenStatus] = useState("");

  useEffect(() => {
    if (reading.PMOne <= 35) {
      setPMOneStatus("Low");
    } else if (reading.PMOne <= 53) {
      setPMOneStatus("Mod");
    } else if (reading.PMOne <= 70) {
      setPMOneStatus("High");
    } else {
      setPMOneStatus("Very high");
    }
    if (reading.PMTwoFive <= 35) {
      setPMTwoFiveStatus("Low");
    } else if (reading.PMTwoFive <= 53) {
      setPMTwoFiveStatus("Mod");
    } else if (reading.PMTwoFive <= 70) {
      setPMTwoFiveStatus("High");
    } else {
      setPMTwoFiveStatus("Very high");
    }
    if (reading.PMTen <= 50) {
      setPMTenStatus("Low");
    } else if (reading.PMTen <= 75) {
      setPMTenStatus("Mod");
    } else if (reading.PMTen <= 100) {
      setPMTenStatus("High");
    } else {
      setPMTenStatus("Very high");
    }
  }, [reading.PMOne, reading.PMTwoFive, reading.PMTen]);

  return (
    <div className="readings-container">
      <div className="reading-container">
        <Sensing className="logo-images" />
        <div className="text">
          <h4 className="title">Sensor ID</h4>
          <span className="reading">{reading.SensorID}</span>
        </div>
      </div>
      <div className="reading-container">
        <ParticulateMatterLogo className="logo-images" />
        <div className="text">
          <h4 className="title">
            PM<sub>1.0</sub>
          </h4>
          <span className="reading">{reading.PMOne + " ug/m3"}</span>
          <span className="concentration">
            Concentration:<strong className= {(PMOneStatus === 'Low' ? "green-text" : PMOneStatus === 'Mod' ? 'orange-text' : 'red-text' ) }>{PMOneStatus}</strong>
          </span>
        </div>
      </div>
      <div className="reading-container">
        <ParticulateMatterLogo className="logo-images" />
        <div className="text">
          <h4 className="title">
            PM<sub>2.5</sub>
          </h4>
          <span className="reading">{reading.PMTwoFive + " ug/m3"}</span>
          <span className="concentration">
            Concentration:<strong  className= {(PMTwoFiveStatus === 'Low' ? "green-text" : PMTwoFiveStatus === 'Mod' ? 'orange-text' : 'red-text' ) }>{PMTwoFiveStatus}</strong>
          </span>
        </div>
      </div>
      <div className="reading-container">
        <ParticulateMatterLogo className="logo-images" />
        <div className="text">
          <h4 className="title">
            PM<sub>10</sub>
          </h4>
          <span className="reading">{reading.PMTen + " ug/m3"}</span>
          <span className="concentration">
            Concentration: <strong  className= {(PMTenStatus === 'Low' ? "green-text" : PMTenStatus === 'Mod' ? 'orange-text' : 'red-text' ) }>{PMTenStatus}</strong>
          </span>
        </div>
      </div>
      <div className="reading-container">
        <TempLogo className="logo-images" />
        <div className="text">
          <h4 className="title">Temperature</h4>
          <span className="reading">
            {reading.TemperatureDHT11 + "\u00b0C"}
          </span>
        </div>
      </div>
      <div className="reading-container">
        <HumLogo className="logo-images" />
        <div className="text">
          <h4 className="title">Humidity</h4>
          <span className="reading">{reading.HumidityDHT11 + "%"}</span>
        </div>
      </div>
      <div className="reading-container">
        <Calendar className="logo-images" />
        <div className="text">
          <h4 className="title">Date Of Reading</h4>
          <span className="reading">
            {reading.date.substring(0, 10)} {"@"}{" "}
            {reading.date.substring(11, 16)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default LatestReading;
