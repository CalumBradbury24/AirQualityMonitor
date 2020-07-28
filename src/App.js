import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LatestReadingPage from "./Pages/LatestReadingPage/LatestReadingPage";
import NavBar from "./Components/NavBar/NavBar";
import HistoricalReadingPage from "./Pages/HistoricalReadingPage/HistoricalReadingPage";
import About from "./Pages/About/About";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={LatestReadingPage} />
            <Route exact path="/Historical" component={HistoricalReadingPage} />
            <Route exact path="/About" component={About} />
          </ErrorBoundary>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
