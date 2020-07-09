import React from "react";
import axios from "axios";
import Spinner from "../../Components/spinner/spinner";
import RenderHistoricalReadings from '../../Components/renderHistoricalReadings/renderHistoricalReadings';
import './HistoricalReadings.styles.scss';


class HistoricalReadings extends React.Component {
  state = {
    readings: [], //Hold readings from MongoDB
    dataLoaded: false, //Is the data loaded?
  };


  componentDidMount = () => {
    axios
      .get("https://mysterious-sierra-11255.herokuapp.com/") //The port the backend server sits on
      .then((response) => {
        this.setState({ readings: response.data, dataLoaded: true });
       // console.log(this.state.readings[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderHistReadings = () => {
    const { readings } = this.state;
   // return readings.map((reading) => {
      return (
        <RenderHistoricalReadings
          reading={readings}
        // key={reading._id}
        />
      );
   // });
  };

render() {
  const { dataLoaded } = this.state;
  return !dataLoaded === true ? (
    <div className="loading">
      <p className="loading-message">
        <strong>Loading data from server...</strong>
      </p>
      <div className="spinner">
        <Spinner />
      </div>
    </div>
  ) : (
    <div className = 'Historical-page '>
      {this.renderHistReadings()}
    </div>
  );
}
 
};

export default HistoricalReadings;
