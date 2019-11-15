import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    height: 180
  },
  container: {
    display: "flex"
  },
  paper: {
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export const FlyOut = props => {
  const classes = useStyles();
  const { direction } = props;
  const checked = props.show;
  let message = props.message ? props.message : "Add message here";
  const arrowDirection =
    direction === "left" ? "arrow_box-left" : "arrow_box-top";
  return (
    <Zoom
      in={checked}
      style={{
        transitionDelay: checked ? "500ms" : "0ms",
        borderRadius: "1rem"
      }}
    >
      <div className={arrowDirection}>
        <a>
          <Typography
            variant="h6"
            {...props}
            style={{
              color: "#3f51b5",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
              padding: "1rem"
            }}
            id="modal-title"
            align="left"
            gutterBottom
          >
            {message}
          </Typography>
        </a>
      </div>
    </Zoom>
  );
};
