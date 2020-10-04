import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

/*MemoryRouter works when you don't need
  access to the history object itself in the test, but just need the 
  components to be able to render and navigate. */

describe("NavBar component", () => {
  it("Should render without errors", () => {
    const nav = render(<NavBar />, { wrapper: MemoryRouter });
    expect(nav).toBeDefined();
  });
});
