import React from "react";
import "./LatestReading.styles.scss";
import { ReactComponent as ParticulateMatterLogo } from "../../assets/particles.svg";
import { ReactComponent as TempLogo } from "../../assets/temperature.svg";
import { ReactComponent as HumLogo } from "../../assets/humidity.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Sensing } from "../../assets/sensor.svg";
import { setModal, setModalStatus } from "../../Redux/modal/modal-actions";
import { connect } from "react-redux";

const LatestReading = ({
  readings,
  onModalSelect,
  setModalStatus,
  modalStatus,
}) => {
  const handleModal = (selectedReading) => {
    onModalSelect(selectedReading); //Set which modal is to be opened
    setModalStatus(!modalStatus); //Flip status of modal
  };

  return (
    <div className="readings-container">
      <div className="reading-container">
        <Sensing className="logo-images" />
        <div className="text">
          <h4 className="title">Sensor ID</h4>
          <span className="reading">
            {readings[readings.length - 1].SensorID}
          </span>
        </div>
      </div>
      <div className="reading-container" onClick={() => handleModal("PMOne")}>
        <ParticulateMatterLogo className="logo-images" />
        <div className="text">
          <h4 className="title">
            PM<sub>1.0</sub>
          </h4>
          <span className="reading">
            {readings[readings.length - 1].PMOne + " ug/m3"}
          </span>
        </div>
      </div>
      <div
        className="reading-container"
        onClick={() => handleModal("PMTwoFive")}
      >
        <ParticulateMatterLogo className="logo-images" />
        <div className="text">
          <h4 className="title">
            PM<sub>2.5</sub>
          </h4>
          <span className="reading">
            {readings[readings.length - 1].PMTwoFive + " ug/m3"}
          </span>
        </div>
      </div>
      <div className="reading-container" onClick={() => handleModal("PMTen")}>
        <ParticulateMatterLogo className="logo-images" />
        <div className="text">
          <h4 className="title">
            PM<sub>10</sub>
          </h4>
          <span className="reading">
            {readings[readings.length - 1].PMTen + " ug/m3"}
          </span>
        </div>
      </div>
      <div
        className="reading-container"
        onClick={() => handleModal("TemperatureDHT11")}
      >
        <TempLogo className="logo-images" />
        <div className="text">
          <h4 className="title">Temperature</h4>
          <span className="reading">
            {readings[readings.length - 1].TemperatureDHT11.toFixed(2) +
              "\u00b0C"}
          </span>
        </div>
      </div>
      <div
        className="reading-container"
        onClick={() => handleModal("HumidityDHT11")}
      >
        <HumLogo className="logo-images" />
        <div className="text">
          <h4 className="title">Humidity</h4>
          <span className="reading">
            {readings[readings.length - 1].HumidityDHT11.toFixed(2) + "%"}
          </span>
        </div>
      </div>
      <div className="reading-container">
        <Calendar className="logo-images" />
        <div className="text">
          <h4 className="title">Date</h4>
          <span className="reading">
            {readings[readings.length - 1].date.substring(8, 10)}
            {"-"}
            {readings[readings.length - 1].date.substring(5, 7)}
            {"-"}
            {readings[readings.length - 1].date.substring(0, 2)} {"@"}{" "}
            {readings[readings.length - 1].date.substring(11, 16)}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalSelect: (event) => dispatch(setModal(event)),
    setModalStatus: (event) => dispatch(setModalStatus(event)),
  };
};

const mapStateToProps = (state) => {
  return {
    readings: state.data.readings,
    modalStatus: state.modal.modalOpen,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestReading);
