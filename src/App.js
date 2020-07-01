import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentReading from "./Pages/Current/CurrentReading";
import NavBar from "./Components/NavBar/NavBar";
import HistoricalReadings from "./Pages/HistoricalReadings/HistoricalReadings";
import About from './Pages/About/About';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={CurrentReading} />
          <Route exact path="/Historical" component={HistoricalReadings} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
