import React from "react";
import axios from "axios";
import RenderCurrentReading from "../../Components/RenderCurrentReading/RenderCurrentReading";
import Spinner from "../../Components/spinner/spinner";
import "./CurrentReading.styles.scss";

class CurrentReading extends React.Component {
  state = {
    readings: [], //Hold readings from MongoDB
    dataLoaded: false, //Is the data loaded?
  };

  componentDidMount = () => {
    axios
      .get("https://mysterious-sierra-11255.herokuapp.com/") //The port the backend server sits on
      .then((response) => {
        this.setState({ readings: response.data, dataLoaded: true });
        console.log(this.state.readings);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderLatestReading = () => {
    const { readings, dataLoaded } = this.state;

    if (dataLoaded === true) {
      readings.reverse(); //Flip object order in array so last reading is at index 0
      var latestResult = readings[0];
      return <RenderCurrentReading reading={latestResult} />;
    }
  };

  render() {
    const { dataLoaded } = this.state;
    return !dataLoaded === true ? (
      <div className='spinner'>
        <Spinner />
      </div>
    ) : (
      <div className="CurrentReading">
        <div>{this.renderLatestReading()}</div>
      </div>
    );
  }
}

export default CurrentReading;
