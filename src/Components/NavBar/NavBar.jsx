import React, {useState} from "react";
import "./NavBar.styles.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
const [selected, setSelected] = useState('Current');//Hooks gives functional components similar state functionality as classes

  return (
    <div className="nav">
      <ul className="list">
        <li className="navbar-item ">
          <Link
            className={selected === "Current" ? "stayOrange" : "default"}
            to="/"
            onClick={() => setSelected("Current")}
          >
            Current Air Quality
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={selected === "Historical" ? "stayOrange" : "default"}
            to="/Historical"
           // onClick={this.handleClick("Historical")}
            onClick={() => setSelected("Historical")}
          >
            Historical Air Quality
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={selected === "About" ? "stayOrange" : "default"}
            to="/About"
            //onClick={this.handleClick("About")}
            onClick={() => setSelected("About")}
          >
            About Project
          </Link>
        </li>
      </ul>
    </div>
  );
}




/*
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
          <li className="navbar-item">
            <Link
              className={isSelected === "About" ? "stayOrange" : "default"}
              to="/About"
              onClick={this.handleClick("About")}
            >
              About Project
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}*/

export default NavBar;
