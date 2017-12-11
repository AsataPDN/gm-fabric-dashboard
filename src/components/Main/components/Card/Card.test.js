import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card component", () => {
  it("matches snapshot", () => {
    const cardWrapper = shallow(<Card />);
    expect(cardWrapper).toMatchSnapshot();
  });
});
