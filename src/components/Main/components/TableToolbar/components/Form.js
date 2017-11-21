import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Form = ({ children }) => {
  return <form onSubmit={e => e.preventDefault()}>{children}</form>;
};

export default Form;
