import React from "react";

const RenderCurrentReading = ({ reading }) => {
  //console.log(reading);
  return (
    <div>
      <p>Sensor ID: {reading.SensorID}</p>
      <p>PM1: {reading.PMOne}</p>
      <p>PM10: {reading.PMTen}</p>
      <p>PM2.5: {reading.PMTwoFive}</p>
      <p>Date: {reading.date}</p>
    </div>
  );
};

export default RenderCurrentReading;
