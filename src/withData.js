import React from "react";
import axios from "axios";
import Spinner from "./Components/spinner/spinner";
import "./withData.styles.scss";
//Higher order component for fetching data from database
const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [], //Hold readings from MongoDB
        dataLoaded: false, //Is the data loaded?
      };
    }
    componentDidMount = () => {
      axios
        .get("https://mysterious-sierra-11255.herokuapp.com/") //The port the backend server sits on
        .then((response) => {
          this.setState({ data: response.data, dataLoaded: true });
        })
        .catch((error) => {
          console.log(error);
        });
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
        <WrappedComponent data={this.state.data} />
      );
    }
  }
  return WithData;
};
export default withData;
