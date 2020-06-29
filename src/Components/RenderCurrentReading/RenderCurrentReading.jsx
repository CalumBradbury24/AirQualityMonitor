import React from "react";
import './RenderCurrentReading.styles.scss';

const RenderCurrentReading = ({ reading }) => {
  return (
    <div className="readings-container">
      <div className="reading-container">
       <span className='title'>Sensor ID</span> 
        <span className="reading">{reading.SensorID}</span>
      </div>
      <div className="reading-container">
      <span className='title'>Particulate Matter<sub>1.0</sub></span> 
        <span className="reading">{reading.PMOne + " ug/m3"}</span>
      </div>
      <div className="reading-container">
      <span className='title'>Particulate Matter<sub>2.5</sub></span> 
        <span className="reading">{reading.PMTwoFive + " ug/m3"}</span>
      </div>
      <div className="reading-container">
      <span className='title'>Particulate Matter<sub>10</sub></span> 
        <span className="reading">{reading.PMTen + " ug/m3"}</span>
      </div>
      <div className="reading-container">
      <span className='title'>Temperature</span> 
        <span className="reading">{reading.TemperatureDHT11 + "\u00b0C"}</span>
      </div>
      <div className="reading-container">
      <span className='title'>Humidity</span> 
        <span className="reading">{reading.HumidityDHT11 + "%"}</span>
      </div>
      <div className="reading-container">
      <span className='title'>Date Of Reading</span> 
        <span className="reading">
          {reading.date.substring(0, 10)} {"@"} {reading.date.substring(11, 16)}
        </span>
      </div>
    </div>
  );
};

export default RenderCurrentReading;
