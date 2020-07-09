import React from "react";
import "./About.styles.scss";

const About = () => {
  return (
    <div className="about-page">
      <h2>Project details</h2>
      <p>
        The sensing system built for this project consists of a Plantower
        PMS5003 Particulate Matter Sensor that can be found{" "}
        <a href="https://shop.pimoroni.com/products/pms5003-particulate-matter-sensor-with-cable#show-accessories">
          here
        </a> 
        .</p>
        <p>
        A Raspberry Pi 3B+ interfaces with the particulate matter sensor
        and, using the PMS5003 Python library, posts recorded particulate matter, temperature and humidity data to a NoSQL MongoDB
        database.
      </p>
      <p>
       This web application, built using React.js, HTML5, SASS for the front-end and Node.js and express.js for the backend, then displays and analyses the previously recorded data. 
      </p>
      <h2>Additional Information</h2>
      <h3>What is Particulate Matter?</h3>
      <p>
        Particulate matter is the sum of all solid and liquid particles
        suspended in air many of which are hazardous. This complex mixture
        includes both organic and inorganic particles, such as dust, pollen,
        soot, smoke, and liquid droplets. These particles vary greatly in size,
        composition, and origin. Particles in air are either: directly emitted,
        for instance when fuel is burnt and when dust is carried by wind, or
        indirectly formed, when gaseous pollutants previously emitted to air
        turn into particulate matter.
      </p>
      <h3>How does Particulate Matter affect humans?</h3>
      <h3>How are humans exposed to Particulate Matter?</h3>
      <h3>Why does particle size matter?</h3>
      <h3>What is the Daily Air Quality Index?</h3>
    </div>
  );
};

export default About;
