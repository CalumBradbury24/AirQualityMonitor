import React from "react";
import { shallow } from "enzyme";
import Logo from '../../Components/Logo/Logo';
import {findByTestAttribute} from '../utils';

describe("Logo component", () => {
  it("Should render a logo", () => {
    const logo = findByTestAttribute(shallow(<Logo />), 'logo-test');
    //console.log(logo.debug());//check what is rendered
    expect(logo.length).toBe(1);
  });
});
