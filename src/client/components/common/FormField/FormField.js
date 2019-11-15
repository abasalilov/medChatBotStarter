import React from "react";
import PropTypes from "prop-types";
import { RegFormField } from "./RegFormField";
import { MobileFormField } from "./MobileFormField";
import { PasswordField } from "./PasswordField";

const FormFieldComponent = props => {
  if (props.type === "password") {
    return <PasswordField {...props} />;
  }

  return props.mobile ? (
    <MobileFormField {...props} {...props.input} />
  ) : (
    <RegFormField {...props} />
  );
};

FormFieldComponent.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  mobile: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
  margin: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.string
};

export const FormField = FormFieldComponent;
