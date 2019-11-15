import React from "react";
import { StyledTextField } from "./StyledTextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 2rem"
  }
};

class MobileInputComponent extends React.Component {
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
          style={{
            backgroundColor: "white",
            borderRadius: "1.3rem",
            height: "10rem"
          }}
          underlineShow={false}
          placeholder={label}
          type={type}
          fullWidth={false}
          inputStyle={{
            height: "85%",
            color: "#162b29",
            boxShadow: "none",
            fontSize: "4rem",
            marginLeft: ".3rem"
          }}
          hintStyle={{
            marginLeft: ".5rem",
            fontSize: "3rem",
            marginBottom: "1rem"
          }}
          underlineFocusStyle={{
            borderColor: "#162b29"
          }}
          floatingLabelStyle={{
            color: "#162b29",
            fontSize: "3rem"
          }}
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
          <strong> {error}</strong>
        </div>
      </div>
    );
  }
}

export const MobileInput = withStyles(styles)(MobileInputComponent);

MobileInputComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string
};
