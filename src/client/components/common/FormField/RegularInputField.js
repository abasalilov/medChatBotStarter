import React from "react";
import { StyledTextField } from "./StyledTextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  showErr: {
    visibility: "visible",
    color: "red",
    width: "14rem",
    height: "1rem"
  },
  hideErr: {
    visibility: "hidden",
    width: "14rem",
    height: "1rem"
  }
};

class RegularInputComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      input,
      label,
      type,
      classes,
      meta: { touched, error }
    } = this.props;
    const showErr = touched && error !== "Required";

    return (
      <div className={classes.inputContainer}>
        <StyledTextField
          {...this.props}
          {...input}
          style={{ borderRadius: ".3rem" }}
          underlineShow={false}
          placeholder={label}
          type={type}
        />
        <div
          style={{
            visibility: showErr ? "visible" : "hidden",
            color: showErr ? "red" : "transparent",
            margin: ".3rem auto",
            width: "18rem",
            height: "1.5rem"
          }}
        >
          {error}
        </div>
      </div>
    );
  }
}

export const RegularInputField = withStyles(styles)(RegularInputComponent);

RegularInputComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string
};
