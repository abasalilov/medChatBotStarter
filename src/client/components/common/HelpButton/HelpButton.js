import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import HelpOutlineTwoTone from "@material-ui/icons/HelpOutlineTwoTone";
import Tooltip from "@material-ui/core/Tooltip";

// import { RegistrationModal } from "../../components/modals";

const styles = {
  container: {
    border: "solid red 3px",
    width: "5rem"
  },
  btn: {
    color: "red",
    fontSize: "2.2rem"
  }
};

const HelpButtonComponent = props => {
  const { classes, onClick } = props;
  return (
    <Tooltip
      enterDelay={100}
      leaveDelay={200}
      title="Need help? Click here"
      onClick={onClick}
    >
      <HelpOutlineTwoTone className={classes.btn} />
    </Tooltip>
  );
};

const HelpButtonWithStyles = withStyles(styles)(HelpButtonComponent);

export const HelpButton = HelpButtonWithStyles;

HelpButtonComponent.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object,
  mobile: PropTypes.bool
};
