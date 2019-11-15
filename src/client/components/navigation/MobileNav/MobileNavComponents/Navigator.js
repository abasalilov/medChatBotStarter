import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { MorphIcon } from "react-svg-buttons";
import { isServer, getScreenWidth } from "../../../../utils";
import {
  resetAuth as createResetAuthAction,
  selectModal as createSelectModalAction
} from "../../../../actions";
import { Profile, LogOut, ContactUs, Home } from "./MobileIcons";
import PropTypes from "prop-types";

const styles = {
  menuBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "black"
  },
  menu: {},
  contactUs: {
    border: "solid #000 4px",
    borderRadius: "50%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "2px"
  }
};

const MorphIconBtn = props => (
  <MorphIcon
    onClick={props.clickFn}
    type={props.type}
    color={"#000"}
    size={props.type === "cross" ? 97 : 100}
    thickness={5}
  />
);

/*eslint-disable*/
class MobileNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      navWidth: 0
    };
    this.togglePress = this.togglePress.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
    this.handleLogOutRoute = this.handleLogOutRoute.bind(this);
  }

  async componentDidMount() {
    const width = isServer ? "100%" : 0.75 * getScreenWidth();
    this.setState({ navWidth: width });
  }

  togglePress() {
    this.setState({ pressed: !this.state.pressed });
  }

  handleRoute(rt) {
    const { history } = this.props;
    // selectModal(rt);
    history.push(rt);
    this.togglePress();
  }

  handleLogOutRoute(rt) {
    const { history, resetAuthentication } = this.props;
    resetAuthentication();
    this.togglePress();
    history.push(rt);
  }

  getRightIcon() {
    const { classes, loc } = this.props;
    if (loc.pathname.includes("login")) {
      return (
        <a href={"/#Home"} onClick={() => this.handleRoute("/#Home")}>
          <Home fill={"#000"} className={classes.contactUs} />
        </a>
      );
    }
    if (loc.pathname.includes("dash")) {
      return (
        <a href={"/#Contact-Us"} onClick={this.handleLogOutRoute}>
          <LogOut className={classes.contactUs} fill={"#000"} />
        </a>
      );
    } else {
      return (
        <a href={"/login"} onClick={() => this.handleRoute("/login")}>
          <Profile fill={"#000"} />
        </a>
      );
    }
  }

  getLeftIcon() {
    const { classes, loc } = this.props;
    if (loc.pathname.includes("login")) {
      return (
        <a
          href={"/#Contact-Us"}
          onClick={() => this.handleRoute("/#Contact-Us")}
        >
          <ContactUs className={classes.contactUs} fill={"#000"} />
        </a>
      );
    }
    if (loc.hash.includes("Contact")) {
      return (
        <a href={"/#Home"} onClick={() => this.handleRoute("/#Home")}>
          <Home fill={"#000"} />
        </a>
      );
    }
    if (loc.pathname.includes("dash")) {
      return (
        <a href={"/#Home"} onClick={this.handleLogOutRoute}>
          <LogOut fill={"#000"} />
        </a>
      );
    } else {
      return (
        <a
          href={"/#Contact-Us"}
          onClick={() => this.handleRoute("/#Contact-Us")}
        >
          <ContactUs className={classes.contactUs} fill={"#000"} />
        </a>
      );
    }
  }

  getMenu() {
    const { pressed } = this.state;
    const { classes } = this.props;
    const type = pressed ? "cross" : "bars";
    return (
      <Fragment>
        {this.getLeftIcon()}
        <MorphIconBtn clickFn={this.togglePress} type={type} />
        {this.getRightIcon()}
      </Fragment>
    );
  }

  render() {
    const { classes, loc } = this.props;
    const { pressed, navWidth } = this.state;
    const type = pressed ? "cross" : "bars";
    return (
      <div className={classes.menuBox}>
        <Fade bottom collapse when={pressed}>
          <div
            className={classes.menu}
            style={{
              width: `${navWidth}px`,
              marginTop: ".4rem"
            }}
          >
            {this.getMenu()}
          </div>
        </Fade>
        {!pressed && <MorphIconBtn clickFn={this.togglePress} type={type} />}
      </div>
    );
  }
}
/*eslint-enable*/

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetAuthentication: () => {
      dispatch(createResetAuthAction());
    },
    selectModal: modalName => {
      dispatch(createSelectModalAction(modalName));
    }
  };
};

const ConnectedNavigator = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MobileNavigator));

export const Navigator = ConnectedNavigator;

MobileNavigator.propTypes = {
  classes: PropTypes.object,
  resetAuthentication: PropTypes.func,
  loc: PropTypes.object,
  history: PropTypes.object
};

MorphIconBtn.propTypes = {
  clickFn: PropTypes.func,
  type: PropTypes.string
};
