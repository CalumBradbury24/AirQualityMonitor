import React from "react";
import PastReadingsTable from "../../Components/HistoricalTableReadings/HistoricalTableReadings";
import "./HistoricalReadingPage.styles.scss";
import PMLineCharts from "../../Components/PMLineCharts/PMLineCharts";
import AverageReadings from "../../Components/AverageReadings/AverageReadings";
import Spinner from "../../Components/spinner/spinner";

import { connect } from "react-redux";

const HistoricalReadingPage = ({ isFetching }) => {
  return isFetching === true ? (
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
    <div className="Historical-page ">
      <div className="side-bar">
        <AverageReadings />
      </div>
      <div className="graphs">
        <PMLineCharts />
      </div>
      <div className="table">
        <PastReadingsTable />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.data.isFetching,
  };
};

export default connect(mapStateToProps)(HistoricalReadingPage);
