import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const btnStyle = {
  width: "75%",
  fontSize: ".8rem",
  borderRadius: "5px",
  color: "#fff",
  marginBottom: "5px"
};

const MobileButtonComponent = props => {
  const { className, label, onSubmit, ...otherProps } = props;
  return (
    <Button
      variant="contained"
      disableRipple={true}
      {...otherProps}
      onSubmit={onSubmit}
      className={className}
      size="large"
      style={btnStyle}
    >
      <strong>{label}</strong>
    </Button>
  );
};

export const MobileButton = MobileButtonComponent;

MobileButtonComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};
