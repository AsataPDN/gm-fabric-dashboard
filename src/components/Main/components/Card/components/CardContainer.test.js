import React from "react";
import { shallow } from "enzyme";
import CardContainer from "./CardContainer";

describe("CardContainer", () => {
  it("matches snapshot", () => {
    const cardContainerWrapper = shallow(<CardContainer />);
    expect(cardContainerWrapper).toMatchSnapshot();
  });
});
