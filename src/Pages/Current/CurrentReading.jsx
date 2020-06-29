import React from "react";
import axios from "axios";
import RenderCurrentReading from "../../Components/RenderCurrentReading/RenderCurrentReading";
import Spinner from "../../Components/spinner/spinner";
import Pie from "../../Components/PieChart/PieChart";
import "./CurrentReading.styles.scss";

class CurrentReading extends React.Component {
  state = {
    readings: [], //Hold readings from MongoDB
    dataLoaded: false, //Is the data loaded?
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000") //The port the backend server sits on
      .then((response) => {
        this.setState({ readings: response.data, dataLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderLatestReading = () => {
    const { readings, dataLoaded } = this.state;

    if (dataLoaded === true) {
      readings.reverse();
      var latestResult = readings[0];
      return <RenderCurrentReading reading={latestResult} />;
    }
  };

  renderPieChart = () => {
    const { readings, dataLoaded } = this.state;

    if (dataLoaded === true) {
      var latestResult = readings[0];
      return <Pie reading={latestResult} />;
    }
  };

  render() {
    const { dataLoaded } = this.state;
    return !dataLoaded === true ? (
      <div className='loading'>
      <p className='loading-message'><strong>Loading data from server...</strong></p>
        <div className="spinner">
          <Spinner />
        </div>
        </div>
    ) : (
      <div className="CurrentReading">
        <div>{this.renderLatestReading()}</div>
        <div className="flex-graphs">
          <div className="pie-container">{this.renderPieChart()}</div>
          <div className="Graphical-data"></div>
        </div>
      </div>
    );
  }
}

export default CurrentReading;
