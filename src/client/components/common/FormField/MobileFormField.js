import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const MobileTextFieldComponent = props => {
  const { meta, initial, iconcomponent, input, mobile, ...otherProps } = props;

  const floatingLabelStyle = {
    fontSize: "1rem",
    paddingLeft: ".25rem",
    color: "#665757"
  };

  const inputStyle = {
    fontSize: "1rem",
    height: "3rem",
    marginTop: "1rem",
    marginLeft: "1rem",
    width: "100%"
  };

  if (otherProps.multiline) {
    inputStyle.height = "30rem";
  }
  const { active, error, touched, dirty } = meta;
  const showPasswordStyle = initial === "password";
  inputStyle.paddingLeft = showPasswordStyle ? ".5 rem" : undefined;

  const isLabelActive = active || dirty;
  floatingLabelStyle.margin = isLabelActive
    ? "-1.2rem 0 0 1rem"
    : "2rem 0 0 1rem";

  const showErr = touched && error !== "Required";

  const errorStyle = {
    visibility: showErr ? "visible" : "hidden",
    color: showErr ? "red" : "transparent",
    width: "100%",
    fontSize: "10px",
    textAlign: "center",
    margin: "6px 0",
    fontFamily: "Raleway-ExtraBold"
  };

  const fieldContainterStyle = { width: "100%" };
  fieldContainterStyle.display = showPasswordStyle ? "flex" : undefined;
  fieldContainterStyle.flexDirection = showPasswordStyle ? "row" : undefined;
  fieldContainterStyle.marginLeft = showPasswordStyle ? "1rem" : undefined;
  return (
    <React.Fragment>
      <Grid container spacing={0} alignItems="flex-end">
        <Grid item style={fieldContainterStyle}>
          <TextField
            margin={"dense"}
            meta={meta}
            {...otherProps}
            {...input}
            fullWidth={true}
            InputProps={{
              style: inputStyle
            }}
            inputProps={{
              style: { marginTop: "1.25rem" }
            }}
            InputLabelProps={{
              style: floatingLabelStyle
            }}
            variant="outlined"
          />
          {iconcomponent}
        </Grid>
      </Grid>
      <div style={errorStyle}>
        <strong>{showErr && error}</strong>
      </div>
    </React.Fragment>
  );
};

export const MobileFormField = MobileTextFieldComponent;
