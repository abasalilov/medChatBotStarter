import React from "react";
/* eslint-disable */
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  description: {
    minWidth: "18rem"
  }
};

const LearnMoreComponent = props => {
  const { mobile, description } = props;
  const typeStyle = {
    marginTop: mobile ? "1rem" : ".5rem"
  };
  typeStyle.fontSize = mobile ? undefined : "1.1rem";
  return (
    <Typography
      align="left"
      key={description}
      variant={mobile ? "h5" : "subtitle1"}
      color="textPrimary"
      style={typeStyle}
    >
      {description}
    </Typography>
  );
};

export const LearnMoreDescription = withStyles(styles)(LearnMoreComponent);
