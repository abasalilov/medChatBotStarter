import * as React from "react";
import { connect } from "react-redux";
import EventListener from "react-event-listener";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";
import { Navigator, Loading } from "./components/navigation";
import { isHeaderMobile } from "./utils";
//https://res.cloudinary.com/dbfv0bfmw/image/upload/v1573853318/manequin.jpg
import {
  resetAuth as createResetAuthAction,
  resizeEvent as createResizeEventAction
} from "./actions";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ["Raleway-ExtraBold"].join(",")
  },
  // https://material-ui.com/customization/themes/#customizing-all-instances-of-a-component-type
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: "white",
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(85, 144, 245, .3)",
        letterSpacing: "2px",
        fontWeight: "600",
        "&:hover": {
          background: "red"
        }
      }
    },
    MuiInputBase: {
      root: {
        fontSize: "20px"
      }
    }
  }
});

class App extends React.PureComponent<PropsT> {
  constructor(props) {
    super(props);

    this.state = {
      confirmedClassName: ""
    };

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleClassNameConfirmation = this.handleClassNameConfirmation.bind(
      this
    );
  }

  async componentDidMount() {
    this.handleWindowSizeChange();
  }

  handleWindowSizeChange() {
    const { resize } = this.props;
    const headerMobile = isHeaderMobile();
    resize(headerMobile);
    this.handleClassNameConfirmation(headerMobile);
  }

  handleRedirect() {
    const { loc, resetAuthentication } = this.props;
    loc.pathname = "/login";
    resetAuthentication();
  }

  handleClassNameConfirmation(mobile) {
    if (mobile) {
      this.setState({ confirmedClassName: "mobileRootStyle" });
    } else {
      this.setState({ confirmedClassName: "regRootStyle" });
    }
  }

  render() {
    const { mobile, history, location, route } = this.props;
    const readyToRender = mobile !== null;
    return (
      <MuiThemeProvider theme={theme}>
        <Helmet>
          <title>LLEAP Voice Controller</title>
          <meta name="description" content="LLEAP Voice Controller" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Helmet defaultTitle="LLEAP Voice Controller" titleTemplate="LLEAP Voice Controller" />
        <CssBaseline />
        <EventListener target="window" onResize={this.handleWindowSizeChange} />
        {readyToRender && (
          <Navigator loc={location} history={history} mobile={mobile} />
        )}
        {readyToRender && renderRoutes(route.routes)}
        {!readyToRender && <Loading />}
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetAuthentication: () => {
      dispatch(createResetAuthAction());
    },
    resize: mobile => {
      dispatch(createResizeEventAction(mobile));
    }
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    mobile: state.mobile
  };
};

const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default {
  component: AppComponent
};
