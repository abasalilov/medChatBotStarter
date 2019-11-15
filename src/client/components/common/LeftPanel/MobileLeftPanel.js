import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { LinkButton } from "../LinkButton";
const styles = {
  "roll-3": {
    margin: "2rem 0rem 0rem 6rem",
    textAlign: "left"
  },
  "p-2": {
    textAlign: "left"
  },
  "container-1": {
    margin: "0rem auto"
  },
  link: {
    color: "#fff",
    border: "solid white",
    borderRadius: ".5rem",
    margin: "2rem",
    textAlign: "center",
    minWidth: "12rem",
    padding: ".5rem",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#03c0fe",
      textShadow: "1px 1px 4px #03c0fe"
    }
  },
  center: {
    margin: "0rem auto"
  },
  textTop: {
    color: "white",
    textAlign: "center",
    margin: "2rem"
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "1rem"
  },
  space: {
    width: "2rem",
    margin: "0 auto"
  },
  linksContainer: {
    maxWidth: "50rem",
    margin: "2rem auto"
  },
  mobileLeft: {
    fontSize: "2rem"
  }
};

const MobileLeftPanelComponent = props => {
  /* eslint-disable */
  const { classes } = props;
  return (
    <div className={classes.mobileLeft}>
      <div className={classes.top}>
        <img src="https://res.cloudinary.com/dbfv0bfmw/image/upload/v1570753007/heroImg.png" />
        <div className={classes.space}>&nbsp;</div>
        <h1 className="bright-blue">
          <strong>LLEAP Voice Controller!</strong>
        </h1>
      </div>

      <div className="w3-col m12 l4 window-dark w3-content">
        <div className={classes.center}>
          <div className={classes.textTop}>
            <h2 className="bright-blue">LLEAP Voice Controller</h2>
          </div>
          <div className={classes.linksContainer}>
            <LinkButton
              to="/services#wp"
              className={classes.link}
              label="White paper drafting."
            />

            <LinkButton
              to="/services#video"
              className={classes.link}
              label="Video content creation."
            />
            <LinkButton
              to="/services#reg"
              className={classes.link}
              label="Regulatory Compliance."
            />
            <LinkButton
              to="/services#pr"
              className={classes.link}
              label="PR and marketing."
            />
            <LinkButton
              to="/services#token"
              className={classes.link}
              label="Token sale website creation."
            />
            <LinkButton
              to="/services#token"
              className={classes.link}
              label="Token and secure wallet development."
            />
          </div>

          <div className={classes.textTop}>
            <h2 className="bright-blue">
              As well as each stage of dApp development:
            </h2>
          </div>
          <div className={classes.linksContainer}>
            <LinkButton
              to="/services#dapp"
              className={classes.link}
              label="dApp software architecture"
            />

            <LinkButton
              to="/services#tech"
              className={classes.link}
              label="Implementation & Infrastructure"
            />

            <LinkButton
              to="/services#tech"
              className={classes.link}
              label="Block chain, sub/side chain implementation & integration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mobile: state.mobile
  };
};

const MobileLeftPanelWithStyles = withStyles(styles)(MobileLeftPanelComponent);

const ConnectedLeftPanel = connect(mapStateToProps)(MobileLeftPanelWithStyles);

export const MobileLeftPanel = ConnectedLeftPanel;
