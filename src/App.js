import React, {useEffect, lazy, Suspense} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LatestReadingPage from "./Pages/LatestReadingPage/LatestReadingPage";
import NavBar from "./Components/NavBar/NavBar";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import Spinner from './Components/spinner/spinner';

//Redux
import { connect } from "react-redux";
import { fetchData } from "./Redux/actions";

//Lazy loading pages
const HistoricalReadingPage = lazy(() => import("./Pages/HistoricalReadingPage/HistoricalReadingPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));

const App = ({fetchData}) => {

  useEffect(() => {
    fetchData();
  }, [fetchData]);//Redux api call
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
            <Route exact path="/" component={LatestReadingPage} />
            <Route exact path="/Historical" component={HistoricalReadingPage} />
            <Route exact path="/About" component={AboutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(null, mapDispatchToProps)(App);
