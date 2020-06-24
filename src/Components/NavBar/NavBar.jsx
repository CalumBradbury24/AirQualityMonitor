import React from "react";
import "./NavBar.styles.scss";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    isSelected: "Current",
  };

  handleClick = (event) => () => {
    this.setState({ isSelected: event });
    console.log(event);
  };

  render() {
    const { isSelected } = this.state;
    return (
      <div className="nav">
        <ul className="list">
          <li className="navbar-item ">
            <Link
              className={isSelected === "Current" ? "stayOrange" : "default"}
              to="/"
              onClick={this.handleClick("Current")}
            >
              Current Air Quality
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              className={isSelected === "Historical" ? "stayOrange" : "default"}
              to="/Historical"
              onClick={this.handleClick("Historical")}
            >
              Historical Air Quality
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
