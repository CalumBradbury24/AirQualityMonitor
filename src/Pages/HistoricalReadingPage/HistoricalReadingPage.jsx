import React from "react";
import PastReadingsTable from "../../Components/HistoricalTableReadings/HistoricalTableReadings";
import "./HistoricalReadingPage.styles.scss";
import PMLineCharts from "../../Components/PMLineCharts/PMLineCharts";
import withData from "../../withData"; //HOC
import AverageReadings from '../../Components/AverageReadings/AverageReadings';

const HistoricalReadingPage = ({ data }) => {
  const renderHistReadings = () => {
    return <PastReadingsTable reading={data} />;
  };

  const renderLineCharts = () => {
    return <PMLineCharts readingData={data} />;
  };

  const renderAverageReadings = () => (
    <AverageReadings data={data}/>
  );

  return (
    <div className="Historical-page ">
      <div className="side-bar">{renderAverageReadings()}</div>
      <div className="graphs">{renderLineCharts()}</div>
      <div className="table">{renderHistReadings()}</div>
    </div>
  );
};

export default withData(HistoricalReadingPage);
