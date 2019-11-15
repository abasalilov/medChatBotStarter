import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";
import PermIdentity from "@material-ui/icons/PermIdentity";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit
  }
});

const OptionDisplayComponent = props => {
  const { classes, className, optionsSelected = [], removeOption } = props;
  const ready = optionsSelected.length !== 0;
  return (
    <div className={className}>
      {ready &&
        optionsSelected.map(option => {
          return (
            <Chip
              label={option}
              clickable
              className={classes.chip}
              color="primary"
              onClick={removeOption}
              variant="outlined"
            />
          );
        })}
    </div>
  );
};
export const SelectedOptionsDisplay = withStyles(styles)(
  OptionDisplayComponent
);
