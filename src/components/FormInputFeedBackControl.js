import React from "react";
import { Form } from "react-bootstrap";

const FormInputFeedBackControl = ({feedBackText}) => {
  return (
    <Form.Control.Feedback type="invalid">{feedBackText}</Form.Control.Feedback>
  );
};

export default FormInputFeedBackControl;
