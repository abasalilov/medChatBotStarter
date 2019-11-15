import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { resetAuth as createResetAuthAction } from "../../../actions";
import { Navigator } from "./MobileNavComponents/Navigator";

const styles = {
  reg: {
    marginRight: "2rem"
  },
  link: {
    fontSize: "3rem"
  },
  navContainer: {
    position: "fixed",
    top: "0",
    width: "100%",
    height: "8rem",
    paddingTop: ".25rem",
    zIndex: "100"
  },
  unadorned: {}
};

class MobileHeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleRedirect = this.handleRedirect.bind(this);
  }

  async componentDidMount() {}

  handleRedirect() {
    /* eslint-disable */
    const { history, resetAuthentication } = this.props;
    this.props.loc.pathname = "/login";
    resetAuthentication();
  }

  render() {
    const { loc, history, classes } = this.props;
    return (
      <nav className={classes.navContainer}>
        <Navigator loc={loc} history={history} />
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
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

const ConnectedMobileNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MobileHeaderComponent));

export const MobileNav = ConnectedMobileNav;
