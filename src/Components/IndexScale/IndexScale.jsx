import React from "react";
import "./IndexScale.styles.scss";

const IndexScale = () => {
  return (
    <div>
      <h4 className='header'>Index Band Scale</h4>
      <div className="container">
        <div className="pale-green">
          <p className="index-item"><strong>1</strong></p>
          <p className="index-meaning">Low</p>
        </div>
        <div className="light-green">
          <p className="index-item"><strong>2</strong></p>
          <p className="index-meaning">Low</p>
        </div>
        <div className="green">
          <p className="index-item"><strong>3</strong></p>
          <p className="index-meaning">Low</p>
        </div>
        <div className="yellow">
          <p className="index-item"><strong>4</strong></p>
          <p className="index-meaning">Moderate</p>
        </div>
        <div className="light-orange">
          <p className="index-item"><strong>5</strong></p>
          <p className="index-meaning">Moderate</p>
        </div>
        <div className="orange">
          <p className="index-item"><strong>6</strong></p>
          <p className="index-meaning">Moderate</p>
        </div>
        <div className="light-red">
          <p className="index-item"><strong>7</strong></p>
          <p className="index-meaning">High</p>
        </div>
        <div className="red">
          <p className="index-item"><strong>8</strong></p>
          <p className="index-meaning">High</p>
        </div>
        <div className="dark-red">
          <p className="index-item"><strong>9</strong></p>
          <p className="index-meaning">High</p>
        </div>
        <div className="purple">
          <p className="index-item"><strong>10</strong></p>
          <p className="index-meaning">Very High</p>
        </div>
      </div>
    </div>
  );
};
export default IndexScale;
