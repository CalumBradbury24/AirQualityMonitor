import React from "react";
import { shallow } from "enzyme";
import NavBar from "../../Components/NavBar/NavBar";
import About from '../../Pages/AboutPage/AboutPage';
import Historical from '../../Pages/HistoricalReadingPage/HistoricalReadingPage';
import Latest from '../../Pages/LatestReadingPage/LatestReadingPage';
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("App", () => {
  it("Should render a navBar", () => {
    const nav = render(<NavBar />, { wrapper: MemoryRouter });
    expect(nav).toBeDefined();
  });
/*
  it("Should render the latest reading page", () => {
    const latest = shallow(<Latest/>);
    expect(latest.length).toBe(1);
  });
  */
});
