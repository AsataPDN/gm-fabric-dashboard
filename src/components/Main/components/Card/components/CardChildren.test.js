import React from "react";
import { shallow } from "enzyme";
import CardChildren from "./CardChildren";

describe("CardChildren", () => {
  it("matches snapshot", () => {
    const cardChildrenWrapper = shallow(<CardChildren />);
    expect(cardChildrenWrapper).toMatchSnapshot();
  });
});
