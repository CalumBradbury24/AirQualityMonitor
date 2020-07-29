import React from "react";
import "./AboutPage.styles.scss";

const About = () => {
  return (
    <div className="about-page">
      <h2 className = 'titles'>Project details</h2>
      <p className = 'paragraph'>
        The sensing system built for this project consists of a Plantower
        PMS5003 Particulate Matter Sensor that can be found{" "}
        <a href="https://shop.pimoroni.com/products/pms5003-particulate-matter-sensor-with-cable#show-accessories">
          here
        </a>
        .
      </p>
      <p className = 'paragraph'>
        A Raspberry Pi 3B+ interfaces with the particulate matter sensor and,
        using the PMS5003 Python library, posts recorded particulate matter,
        temperature and humidity data to a NoSQL MongoDB database.
      </p>
      <p className = 'paragraph'>
        This web application, built using React.js, HTML5, SASS for the
        front-end and Node.js and express.js for the backend, then displays and
        analyses the previously recorded data.
      </p>
      <h2 className = 'titles'>Additional Information</h2>
      <h3 className = 'titles'>What is Particulate Matter?</h3>
      <p className = 'paragraph'>
        Particulate matter is the sum of all solid and liquid particles
        suspended in air many of which are hazardous. This complex mixture
        includes both organic and inorganic particles, such as dust, pollen,
        soot, smoke, and liquid droplets. These particles vary greatly in size,
        composition, and origin. Particles in air are either directly emitted,
        for instance when fuel is burnt and when dust is carried by wind, or
        indirectly formed, when gaseous pollutants previously emitted into the air
        turn into particulate matter.
      </p>
      <h3 className = 'titles'>How does Particulate Matter affect humans?</h3>
      <p className = 'paragraph'>
        The World Health Organisation (WHO) state that long-term exposure to
        current ambient PM concentrations may lead to a marked reduction in life
        expectancy. The reduction in life expectancy is primarily due to
        increased cardio-pulmonary and lung cancer mortality. Increases are
        likely in lower respiratory symptoms and reduced lung function in
        children, and chronic obstructive pulmonary disease and reduced lung
        function in adults. See https://www.euro.who.int/__data/assets/pdf_file/0005/112199/E79097.pdf.
      </p> 
      <h3 className = 'titles'>Why does particle size matter?</h3>
      <p className = 'paragraph'>
        The aerodynamic and physical properties of particles determine how they
        are transported in air and how they can be removed from it. These
        properties also govern how far they can travel into the air passages of
        the respiratory system.
      </p>
      <h3 className = 'titles'>What is the Air Quality Index?</h3>
      <p className = 'paragraph'>
        The Air Quality Index (AQI) gives information about the levels of air
        pollution. Numbered 1-10 and divided into four bands, low (1) to very
        high (10), the index allows for the provision of air pollution levels in a
        simple way.
      </p>
    </div>
  );
};

export default About;
