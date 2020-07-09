import React from "react";
import "./IndexScale.styles.scss";

const IndexScale = () => {
  return (
    <div>
      <h4 className='header'>Index Band Scale</h4>
      <div className="container">
        <div className="pale-green individual-container">
          <p className="index-item"><strong>1</strong></p>
          <p className="index-meaning">Low</p>
        </div>
        <div className="light-green individual-container">
          <p className="index-item"><strong>2</strong></p>
          <p className="index-meaning">Low</p>
        </div>
        <div className="green individual-container">
          <p className="index-item"><strong>3</strong></p>
          <p className="index-meaning">Low</p>
        </div>
        <div className="yellow individual-container">
          <p className="index-item"><strong>4</strong></p>
          <p className="index-meaning">Moderate</p>
        </div>
        <div className="light-orange individual-container">
          <p className="index-item"><strong>5</strong></p>
          <p className="index-meaning">Moderate</p>
        </div>
        <div className="orange individual-container">
          <p className="index-item"><strong>6</strong></p>
          <p className="index-meaning">Moderate</p>
        </div>
        <div className="light-red individual-container">
          <p className="index-item"><strong>7</strong></p>
          <p className="index-meaning">High</p>
        </div>
        <div className="red individual-container">
          <p className="index-item"><strong>8</strong></p>
          <p className="index-meaning">High</p>
        </div>
        <div className="dark-red individual-container">
          <p className="index-item"><strong>9</strong></p>
          <p className="index-meaning">High</p>
        </div>
        <div className="purple individual-container">
          <p className="index-item"><strong>10</strong></p>
          <p className="index-meaning">Very High</p>
        </div>
      </div>
    </div>
  );
};
export default IndexScale;
