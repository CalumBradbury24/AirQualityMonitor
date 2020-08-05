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
    const readings = data.reverse();
    return <PMLineCharts readings={readings} />;
  };

  const renderAverageReadings = () => (
   /* data.map((historicalReadings) => (
        <AverageReadings
          data={historicalReadings} key={historicalReadings._id} />
      )
    )*/
    <AverageReadings data={data}/>
  );

  return (
    <div className="Historical-page ">
      <div className="side-bar">{renderAverageReadings()}</div>
      <div className="graphs">{renderHistReadings()}</div>
      <div className="table">{renderLineCharts()}</div>
    </div>
  );
};

export default withData(HistoricalReadingPage);
