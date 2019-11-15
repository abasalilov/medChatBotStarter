import React from "react";
import { StyledTextField } from "./StyledTextField";
import PropTypes from "prop-types";

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? true
    : false;

export const RegFormField = props => {
  const { meta } = props;
  let showErr = meta.touched;
  let showEmailMsg = false;
  let errorMsg = "";
  let showGreen = meta.error && meta.error.indexOf("Good") !== -1;
  const keepVisible = {
    height: "1.5rem",
    marginTop: ".2rem",
    marginBottom: "5px",
    textAlign: "center"
  };

  if (props.emailError) {
    showErr = !meta.active;
    const isError = email(props.input.value) && props.input.value.length > 6;
    if (isError) {
      errorMsg = "Invalid email address";
      showEmailMsg = true;
      showErr = true;
    }
  }
  return (
    <React.Fragment>
      <StyledTextField
        {...props.input}
        {...props}
        style={{ borderRadius: ".3rem" }}
        fullWidth={true}
      />
      <div style={keepVisible}>
        <strong
          style={{
            visibility: showErr ? "visible" : "hidden",
            color: showErr ? (showGreen ? "green" : "red") : "transparent",
            width: "18rem",
            fontFamily: "Raleway-ExtraBold",
            fontSize: "20px"
          }}
        >
          {showEmailMsg ? errorMsg : meta.error}
        </strong>
      </div>
    </React.Fragment>
  );
};

RegFormField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string
};
