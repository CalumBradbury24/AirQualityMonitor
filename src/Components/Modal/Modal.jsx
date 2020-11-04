import React, { useState, useRef, useEffect } from "react";
import "./Modal.styles.scss";
import { connect } from "react-redux";
import { setModalStatus } from "../../Redux/modal/modal-actions";
import { ReactComponent as ButtonIcon } from "../../assets/button-icon.svg";
import CustomChart from '../CustomChart/CustomChart';

const Modal = ({ setModalStatus, modalStatus, modalOption }) => {
  const [title, setTitle] = useState("");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      switch (modalOption) {
        case "PMOne":
          setTitle("PM1 reading history");
          break;
        case "PMTwoFive":
          setTitle("PM2.5 reading history");
          break;
        case "PMTen":
          setTitle("PM10 reading history");
          break;
        case "TemperatureDHT11":
          setTitle("Temperature reading history");
          break;
        case "HumidityDHT11":
          setTitle("Humidity reading history");
          break;
        default:
          break;
      }

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalStatus(!modalStatus);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className="blur-background">
      <div ref={wrapperRef} className="modal-container">
        <span className="modal-title-button">
          <h2 className="modal-title">{title}</h2>
          <button
            className="modal-button"
            onClick={() => setModalStatus(!modalStatus)}
          >
            <ButtonIcon />
          </button>
        </span>
        <div><CustomChart/></div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setModalStatus: (event) => dispatch(setModalStatus(event)),
  };
};

const mapStateToProps = (state) => {
  return {
    modalStatus: state.modal.modalOpen,
    modalOption: state.modal.modalOption,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Modal));

//generate graph that passes status down to it and does all the data using that status i.e pm1 (maybe need redux to avoid prop drilling?)
