import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { VoiceComponent } from "./VoiceComponent";

const styles = {
  ref: {
    margin: "2rem",
    textDecoration: "none",
    color: "#000",
    paddingTop: "2rem"
  },
  section: { marginTop: "1rem" },
  links: { display: "flex", justifyContent: "center", margin: "2rem 1rem" }
};

const VoicePageComponent = props => {
  const { classes } = props;
  return (
    <section className={classes.section} id="terms">
      <VoiceComponent />
    </section>
  );
};

export const VoicePage = {
  component: withStyles(styles)(VoicePageComponent)
};

VoicePageComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
