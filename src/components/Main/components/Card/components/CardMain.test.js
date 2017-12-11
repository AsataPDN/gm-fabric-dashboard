import React from "react";
import { shallow } from "enzyme";
import CardMain from "./CardMain";

describe("CardMain", () => {
  it("matches snapshot", () => {
    const cardMainWrapper = shallow(<CardMain />);
    expect(cardMainWrapper).toMatchSnapshot();
  });
});
