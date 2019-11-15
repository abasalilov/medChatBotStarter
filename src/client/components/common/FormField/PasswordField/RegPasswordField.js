import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { StyledTextField } from "../StyledTextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class RegPasswordFieldComponent extends React.Component {
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
    const iconStyle = {
      color: "#5184ec !important",
      fontSize: "1.5rem",
      borderRadius: "5px"
    };
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="Toggle password visibility"
          onClick={this.handleClickShowPassword}
          disableRipple={true}
          style={{
            margin: "0 1rem 1rem 0"
          }}
          onMouseDown={this.handleMouseDownPassword}
        >
          {showPassword ? (
            <VisibilityOff style={iconStyle} />
          ) : (
            <Visibility style={iconStyle} />
          )}
        </IconButton>
      </InputAdornment>
    );
  }

  render() {
    const { meta } = this.props;
    const { initial, showPassword } = this.state;
    const { active, error, touched, dirty } = meta;
    const showPasswordStyle = initial === "password";
    const fieldContainterStyle = { width: "100%" };
    fieldContainterStyle.display = showPasswordStyle ? "flex" : undefined;
    fieldContainterStyle.flexDirection = showPasswordStyle ? "row" : undefined;
    const gridItemStyle = { width: "28rem" };
    const showErr = meta.touched && meta.error !== "Required";
    const keepVisible = {
      height: "1.5rem",
      marginTop: ".2rem",
      textAlign: "center"
    };
    return (
      <React.Fragment>
        <Grid item style={fieldContainterStyle}>
          <StyledTextField
            fullWidth={true}
            style={gridItemStyle}
            meta={meta}
            {...this.props}
            {...this.props.input}
            type={showPassword ? "text" : "password"}
            iconcomponent={this.getIconComponent(showPassword)}
          />
        </Grid>
        <div style={keepVisible}>
          <strong
            style={{
              visibility: showErr ? "visible" : "hidden",
              color: showErr ? "red" : "transparent",
              height: "1.5rem"
            }}
          >
            {meta.error}
          </strong>
        </div>
      </React.Fragment>
    );
  }
}

RegPasswordFieldComponent.propTypes = {
  classes: PropTypes.object
};

export const RegPasswordField = RegPasswordFieldComponent;
