import React, {useState, useEffect} from "react";
import "./RenderCurrentReading.styles.scss";

const LatestReading = ({reading}) => {

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
  },[reading.PMOne,reading.PMTwoFive,reading.PMTen]);

  return(
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
      <span className="reading">
        {reading.TemperatureDHT11 + "\u00b0C"}
      </span>
    </div>
    <div className="reading-container">
      <h4 className="title">Humidity</h4>
      <span className="reading">{reading.HumidityDHT11 + "%"}</span>
    </div>
    <div className="reading-container">
      <h4 className="title">Date Of Reading</h4>
      <span className="reading">
        {reading.date.substring(0, 10)} {"@"}{" "}
        {reading.date.substring(11, 16)}
      </span>
    </div>
  </div>
);
  


}


/*
class RenderCurrentReading extends React.Component {
  state = {
    PMOneStatus: "",
    PMTwoFiveStatus: "",
    PMTenStatus: "",
  };

  componentDidMount = () => {
    const { reading } = this.props;
    if (reading.PMOne <= 35) {
      this.setState({ PMOneStatus: "Low" });
    } else if (reading.PMOne <= 53) {
      this.setState({ PMOneStatus: "Moderate" });
    } else if (reading.PMOne <= 70) {
      this.setState({ PMOneStatus: "High" });
    } else {
      this.setState({ PMOneStatus: "Very high" });
    }

    if (reading.PMTwoFive <= 35) {
      this.setState({ PMTwoFiveStatus: "Low" });
    } else if (reading.PMTwoFive <= 53) {
      this.setState({ PMTwoFiveStatus: "Moderate" });
    } else if (reading.PMTwoFive <= 70) {
      this.setState({ PMTwoFiveStatus: "High" });
    } else {
      this.setState({ PMTwoFiveStatus: "Very high" });
    }

    if (reading.PMTen <= 50) {
      this.setState({ PMTenStatus: "Low" });
    } else if (reading.PMTen <= 75) {
      this.setState({ PMTenStatus: "Moderate" });
    } else if (reading.PMTen <= 100) {
      this.setState({ PMTenStatus: "High" });
    } else {
      this.setState({ PMTenStatus: "Very high" });
    }
  };

  render() {
    const { reading } = this.props;
    const {
      PMOneStatus,
      PMTwoFiveStatus,
      PMTenStatus,
    } = this.state;
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
          <span className="reading">
            {reading.TemperatureDHT11 + "\u00b0C"}
          </span>
        </div>
        <div className="reading-container">
          <h4 className="title">Humidity</h4>
          <span className="reading">{reading.HumidityDHT11 + "%"}</span>
        </div>
        <div className="reading-container">
          <h4 className="title">Date Of Reading</h4>
          <span className="reading">
            {reading.date.substring(0, 10)} {"@"}{" "}
            {reading.date.substring(11, 16)}
          </span>
        </div>
      </div>
    );
  }
}*/

export default LatestReading;
