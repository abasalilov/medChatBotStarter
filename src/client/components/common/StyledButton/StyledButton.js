import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { MobileButton } from "./MobileButton";

const regBtnStyle = {
  borderRadius: "5px",
  width: "10rem",
  fontSize: "1rem",
  textAlign: "center",
  marginRight: "5px",
  "&hover": {
    backgroundColor: "red"
  }
};

const ButtonComponent = props => {
  const { isMobile, className, label, onSubmit, mobile, ...otherProps } = props;
  const btn = isMobile ? (
    <MobileButton
      label={label}
      onSubmit={onSubmit}
      {...otherProps}
      className={className}
    />
  ) : (
    <Button
      disableRipple={true}
      {...otherProps}
      onSubmit={onSubmit}
      className={className}
      style={regBtnStyle}
    >
      {label}
    </Button>
  );
  return btn;
};

const mapStateToProps = state => {
  return {
    isMobile: state.mobile
  };
};
export const StyledButton = connect(
  mapStateToProps,
  null
)(ButtonComponent);

ButtonComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string
};
