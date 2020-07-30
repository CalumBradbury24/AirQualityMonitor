import React from "react";
import PastReadings from "../../Components/HistoricalTableReadings/HistoricalTableReadings";
import "./HistoricalReadingPage.styles.scss";
import PMLineCharts from '../../Components/PMLineCharts/PMLineCharts';
import withData from "../../withData";//HOC

const HistoricalReadingPage = ({data}) => {

  const renHistReadings = () => {
    return <PastReadings reading={data} />;
  };

  const ren = () => {
    const readings = data.reverse();
    return <PMLineCharts readings={readings} />;
  };


    return (
      <div className="Historical-page ">
        {renHistReadings()}
        {ren() }
      </div>
    );
  
}

export default withData(HistoricalReadingPage);
