import React from "react";
import LatestReading from "../../Components/LatestReading/LatestReading";
import Pie from "../../Components/PieChart/PieChart";
import "./LatestReadingPage.styles.scss";
import LocationMap from "../../Components/LocationMap/LocationMap";
import HorizontalBarChart from "../../Components/HorizontalBarChart/HorizontalBarChart";
import PMIndexScale from "../../Components/PMIndexScale/PMIndexScale";
import ReadingChange from "../../Components/ReadingChange/ReadingChange";
import withData from "../../withData"; //Import HOC for getting data

const LatestReadingPage = ({data}) => {
  data.reverse();//Last reading in data[0]
  const latestResult = data[0];
 
  const renderLatestReading = () => {
    return <LatestReading reading={latestResult} />;
  };
  
  const renderPieChart = () => {
    return <Pie reading={latestResult} />;
  };

  const renderMap = () => {
    return <LocationMap reading={latestResult} />;
  };

  const renderHorizontalBar = () => {
    return <HorizontalBarChart reading={latestResult} />;
  };

  const renderVerticalBar = () => {
    return <PMIndexScale reading={latestResult} />;
  };

  
  const renderChanges = () => {
    return <ReadingChange reading={data} />;
  };

  return (
    <div className="CurrentReading">
      <div>{renderLatestReading()}</div>
      <div className="flex-graphs">
        <div className="data-container">{renderHorizontalBar()}</div>
        {
          <div className="data-container">
            {renderVerticalBar()}
          </div>
        }{" "}
        <div className="data-container">{renderPieChart()}</div>
        <div className="data-container">{renderMap()}</div>
      </div>
      <div>{renderChanges()}</div>
    </div>
  );
}

export default withData(LatestReadingPage);
