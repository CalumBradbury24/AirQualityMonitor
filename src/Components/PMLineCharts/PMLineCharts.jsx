import React, { useState } from "react";
import Charts from './Charts';
import "./PMLineCharts.styles.scss";


const PMLineCharts = () => {
  const [selectGraph, setSelectGraph] = useState("PMOne");

  const handleClick = (event) => () => {
    setSelectGraph(event);
  };

  return (
    <div>
      <h2 className="graphs-title">PM Readings over time</h2>
      <div className="graph-selector">
        <h4
          className={"on-hover " + (selectGraph === "PMOne" ? "blue" : "default")}
          onClick={handleClick("PMOne")}
        >
          PM<sub>1.0</sub>
        </h4>
        <h4
          className={"on-hover " + (selectGraph === "PMTwoFive" ? "blue" : "default")}
          onClick={handleClick("PMTwoFive")}
        >
          PM<sub>2.5</sub>
        </h4>
        <h4
          className={
            "on-hover " + (selectGraph === "PMTen" ? "blue" : "default")
          }
          onClick={handleClick("PMTen")}
        >
          PM<sub>10</sub>
        </h4>
      </div>
     <Charts PMvalue={selectGraph} />
    </div>
  );
};


export default React.memo(PMLineCharts);
