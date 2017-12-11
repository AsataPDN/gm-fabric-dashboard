import React from "react";
import { shallow } from "enzyme";
import CardTitle from "./CardTitle";

describe("CardTitle", () => {
  it("matches snapshot", () => {
    const cardTitleWrapper = shallow(<CardTitle />);
    expect(cardTitleWrapper).toMatchSnapshot();
  });
});
