import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { MobileFormField } from "../MobileFormField";

const iconStyle = {
  color: "#5184ec !important",
  fontSize: "1.5rem",
  width: "100%",
  marginLeft: "1rem",
  borderRadius: "5px"
};

class MobilePasswordFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      initial: null
    };

    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.getIconComponent = this.getIconComponent.bind(this);
  }

  componentDidMount() {
    if (this.props.type === "password") {
      this.setState({ initial: "password" });
    }
  }

  handleMouseDownPassword(event) {
    event.preventDefault();
  }

  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  getIconComponent(showPassword) {
    return (
      <IconButton
        aria-label="Toggle password visibility"
        onClick={this.handleClickShowPassword}
        disableRipple={true}
        onMouseDown={this.handleMouseDownPassword}
      >
        {showPassword ? (
          <VisibilityOff style={iconStyle} />
        ) : (
          <Visibility style={iconStyle} />
        )}
      </IconButton>
    );
  }

  render() {
    const { meta } = this.props;
    const { initial, showPassword } = this.state;
    return (
      <React.Fragment>
        <MobileFormField
          initial={initial}
          meta={meta}
          {...this.props.input}
          {...this.props}
          type={showPassword ? "text" : "password"}
          iconcomponent={this.getIconComponent(showPassword)}
        />
      </React.Fragment>
    );
  }
}

MobilePasswordFieldComponent.propTypes = {
  classes: PropTypes.object
};

export const MobilePasswordField = MobilePasswordFieldComponent;
