import React from "react";
import { shallow } from "enzyme";
import CardBody from "./CardBody";

describe("CardBody", () => {
  it("matches snapshot", () => {
    const cardBodyWrapper = shallow(<CardBody />);
    expect(cardBodyWrapper).toMatchSnapshot();
  });
});
