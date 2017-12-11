import React from "react";
import { shallow } from "enzyme";
import CardSection from "./CardSection";

describe("CardSection", () => {
  it("matches snapshot", () => {
    const cardSectionWrapper = shallow(<CardSection />);
    expect(cardSectionWrapper).toMatchSnapshot();
  });
});
