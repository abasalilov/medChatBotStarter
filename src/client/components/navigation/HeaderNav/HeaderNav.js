import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { HeaderLink } from "../../common";
import { confirmAuth } from "../../../utils";
import { resetAuth as createResetAuthAction } from "../../../actions";
import Grid from "@material-ui/core/Grid";

const LOGIN = "LOGIN";

const styles = {
  w3Top: {
    top: "0",
    positiion: "fixed",
    zIndex: "1",
    marginTop: "1rem"
  },
  w3Black: {
    backgroundColor: "black !important",
    color: "#fff !important"
  },
  w3Bar: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "100",
    marginBottom: "2rem"
  },
  w3BarAuth: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "100",
    marginBottom: "2rem",
    padding: "0 1rem"
  },
  w3Button: {
    userSelect: "none",
    color: "#000",
    "&:hover": {
      color: "#1260DF",
      textShadow: "1px 1px 4px white"
    }
  },
  w3BarItem: {
    display: "inline-block",
    verticalAlign: "middle",
    textDecoration: "none",
    backgroundColor: "inherit",
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#1260DF !important",
      textShadow: "1px 1px 4px white"
    }
  },
  selected: {
    backgroundColor: "#fff",
    color: "#000",
    textShadow: "1px 1px 4px #1260DF"
  },
  notSelected: {}
};

const loginStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
};

const externalHeaderLinks = [
  "HOME",
  "LLEAP PARAMETERS",
  "SCENES",
  "VOICE ACTIVATION",
  "HELP"
];

const internalHeaderLinks = ["HOME", "LOGIN"];

const getTitle = title => {
  const link = title.replace(" ", "-");
  if (title === LOGIN) {
    return "/login";
  }
  if (title === "PROGRAMS") {
    return "/programs";
  }
  return link;
};

const NavButton = props => {
  const { mobile, title, onClick, classes } = props;
  let button;
  const linkClassName = classNames(classes.w3BarItem, classes.w3Button);
  const linkPath = getTitle(title);
  const isHref = linkPath.includes("#");
  let linkPathVar = "";
  linkPathVar = linkPath;
  button = (
    <HeaderLink
      isHref={isHref}
      className={linkClassName}
      to={linkPathVar}
      title={title}
      mobile={mobile ? 1 : 0}
    />
  );
  return button;
};
/* eslint-disable */

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  async componentDidMount() {}

  async handleLogOut() {
    const { history, resetAuthentication } = this.props;
    await resetAuthentication();
    this.props.loc.pathname = "/";
  }

  render() {
    const { classes } = this.props;
    return (
      <nav>
        <div className={classNames(classes.w3Top, classes.w3Black)}>
          <div className={classes.w3Bar}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justify="center"
              direction={"row"}
            >
              <Grid item xs={10}>
                <Grid
                  container
                  spacing={1}
                  alignItems="flex-start"
                  justify="center"
                  direction={"row"}
                >
                  {externalHeaderLinks.map(title => {
                    return (
                      <Grid item style={{ textAlign: "center" }} xs={2}>
                        <NavButton
                          key={title}
                          {...this.props}
                          title={title}
                          onClick={this.handleLogOut}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: { attempted: false, result: "" },
    mobile: state.mobile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetAuthentication: () => {
      dispatch(createResetAuthAction());
    }
  };
};

export const HeaderNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HeaderComponent));

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
