import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Form = styled.form.attr({
  onSubmit: e => e.preventDefault()
});

export default Form;
