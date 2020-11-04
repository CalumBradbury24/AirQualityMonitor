import React from "react";
import LatestReading from "../../Components/LatestReading/LatestReading";
import Pie from "../../Components/PieChart/PieChart";
import "./LatestReadingPage.styles.scss";
import LocationMap from "../../Components/LocationMap/LocationMap";
import HorizontalBarChart from "../../Components/HorizontalBarChart/HorizontalBarChart";
import PMIndexScale from "../../Components/PMIndexScale/PMIndexScale";
import ReadingChange from "../../Components/ReadingChange/ReadingChange";
import Spinner from '../../Components/spinner/spinner';
import Modal from '../../Components/Modal/Modal';
import { connect } from "react-redux";

const LatestReadingPage = ({ isFetching, isModalActive }) => {
  return (
     isFetching === true ? (
      <div className="loading">
        <p className="loading-message">
          <strong>
            Loading data from Heroku back-end server...this may take up to 30
            seconds
          </strong>
        </p>
        <div className="spinner">
            <Spinner />
          </div>
      </div>
    ) : (
    <div className="CurrentReading">
      <LatestReading />
      <div className="flex-graphs">
      <div className="data-container"><HorizontalBarChart/></div>
      <div className="data-container"><PMIndexScale/></div>
      <div className="data-container"><Pie/></div>
      <div className="data-container"> <LocationMap /></div>
      </div>
      <ReadingChange />
      {isModalActive === true ? <Modal /> : null}
    </div>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.data.isFetching,
    isModalActive: state.modal.modalOpen
  };
};

export default connect(mapStateToProps)(LatestReadingPage);