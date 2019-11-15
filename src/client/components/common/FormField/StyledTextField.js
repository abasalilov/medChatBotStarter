import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

/* eslint-disable */

const StyledFieldComponent = props => {
  const {
    className,
    iconcomponent,
    fullWidth,
    input,
    label,
    meta,
    mobile,
    margin,
    multiline,
    onChange,
    placeholder,
    rows,
    rowsMax,
    showborder,
    style,
    type,
    value
  } = props;
  const borderStyle = showborder
    ? { border: "solid 2px #000", width: "100%" }
    : undefined;
  return (
    <Grid item style={style}>
      <TextField
        className={className}
        fullWidth={fullWidth}
        {...input}
        label={label}
        margin={margin}
        multiline={multiline}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        rowsMax={rowsMax}
        showborder={showborder}
        type={type}
        value={value}
        style={borderStyle}
        InputProps={{
          style: { marginLeft: ".5rem" },
          disableUnderline: true,
          endAdornment: iconcomponent
        }}
        InputLabelProps={{
          style: { marginLeft: ".5rem" }
        }}
      />
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    showBorder: !state.mobile
  };
};

const ConnectedTextField = connect(
  mapStateToProps,
  null
)(StyledFieldComponent);

export const StyledTextField = ConnectedTextField;

StyledFieldComponent.propTypes = {};
