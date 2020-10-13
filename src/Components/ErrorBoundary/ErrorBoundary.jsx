import React from "react";
import './ErrorBoundary.styles.scss';
import error from '../../assets/error-image.jpg';

//If there is an error we don't show the user the red page with all the errors
class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false, //error or not?
  };
  //error argument is error in a child component
  static getDerivedStateFromError(error) {
    //Catches any error thrown in children of ErrorBoundary component
    //process the error
    return { hasErrored: true };
  }
  //info is information about the error that was thrown
  componentDidCatch(error, info) {
    console.log(error);
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className='error-boundary'>
          {" "}
          <p>
            Oops! There was an error loading this page :(</p>
            <img src={error} alt='404'/>
            <span
              style={{ cursor: "pointer", color: "#0077FF", padding:"15px" }}
              onClick={() => {
                window.location.reload();
              }}
            >
              Reload this page
            </span>
          
        </div>
      ); //Display message if there is an error
    }
    return this.props.children; //No error, render children normally
  }
}

export default ErrorBoundary;
