import React from "react";
import RenderCurrentReading from "../../Components/RenderCurrentReading/RenderCurrentReading";
import Pie from "../../Components/PieChart/PieChart";
import "./CurrentReading.styles.scss";
import LocationMap from "../../Components/LocationMap/LocationMap";
import SingleReadingBarChart from "../../Components/SingleReadingBarChart/SingleReadingBarChart";
import PMIndexScale from "../../Components/PMIndexScale/PMIndexScale";
import ReadingChange from "../../Components/ReadingChange/ReadingChange";
import withData from "../../withData"; //Import HOC for getting data

class CurrentReading extends React.Component {
  renderLatestReading = () => {
    const { data } = this.props;
    data.reverse();
    var latestResult = data[0];
    return <RenderCurrentReading reading={latestResult} />;
  };

  renderPieChart = () => {
    const { data } = this.props;
    var latestResult = data[0];
    return <Pie reading={latestResult} />;
  };

  renderMap = () => {
    const { data } = this.props;
    var latestResult = data[0];
    return <LocationMap reading={latestResult} />;
  };

  renderHorizontalBar = () => {
    const { data } = this.props;
    var latestResult = data[0];
    return <SingleReadingBarChart reading={latestResult} />;
  };

  renderVerticalBar = () => {
    const { data } = this.props;
    var latestResult = data[0];
    return <PMIndexScale reading={latestResult} />;
  };

  renderChanges = () => {
    const { data } = this.props;
    return <ReadingChange reading={data} />;
  };

  render() {
    return (
      <div className="CurrentReading">
        <div>{this.renderLatestReading()}</div>
        <div className="flex-graphs">
          <div className="bar-container">{this.renderHorizontalBar()}</div>
          {
            <div className="vertical-bar-container">
              {this.renderVerticalBar()}
            </div>
          }{" "}
          <div className="data-container">{this.renderPieChart()}</div>
          <div className="map-container">{this.renderMap()}</div>
        </div>
        <div>{this.renderChanges()}</div>
      </div>
    );
  }
}

export default withData(CurrentReading);
