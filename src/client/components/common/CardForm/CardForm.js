import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { StyledButton, FormField } from "../index";
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1,
    margin: "3rem auto",
    height: "100%"
  },
  btn: {
    margin: "0 auto"
  },
  link: {
    margin: "0rem auto"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem auto"
  },
  mobileLink: {
    margin: "0rem auto",
    fontSize: "3rem"
  },
  linkContainer: {
    color: "#fff"
  },
  btmContainer: {
    display: "flex",
    justifyContent: "center"
  },
  field: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem",
    opacity: "1"
  },
  header: {
    textAlign: "center"
  }
};

const validate = values => {
  const errors = {};
  if (values.registerPassword && values.confirmPassword) {
    if (values.registerPassword !== values.confirmPassword) {
      errors.registerPassword = "Passwords do not match";
      errors.confirmPassword = "Passwords do not match";
    }
  }
  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values, dispatch) => {
  if (values.username_email) {
    return dispatch(console.log(values.username_email));
  }
  return sleep(10).then(a => console.log("a", a));
};
/* eslint-disable */

class CardFormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader() {
    const { mobile, formName } = this.props;
    return mobile ? (
      <h1 style={{ color: "#fff" }}>
        <strong>{formName}</strong>
      </h1>
    ) : (
      <h3 style={{ color: "#fff" }}>{formName}</h3>
    );
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      registered,
      classes,
      mobile,
      reset,
      history
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            className="window-trans-padded bordered-box"
            style={{
              border: "1px #000 solid",
              borderRadius: "1rem",
              minWidth: mobile ? "45rem" : "30rem",
              marginTop: "3rem",
              backgroundColor: "rgba(24, 186, 154, 0.23)"
            }}
          >
            <div className={classes.header}>{this.renderHeader()}</div>
            <form
              onSubmit={handleSubmit(values => {
                const {
                  confirmPassword,
                  registerPassword,
                  lastName,
                  firstName,
                  username_email
                } = values;
                const { registerUser } = props;
                const isRegistered = registerUser({
                  username: username_email,
                  firstname: firstName,
                  lastname: lastName,
                  email: username_email,
                  dob: "",
                  pw: confirmPassword
                });
              })}
            >
              <div className={classes.field}>
                <Field
                  name="username_email"
                  type="text"
                  placeholder="Enter email address"
                  label="Email/Username"
                  mobile={mobile}
                  component={FormField}
                />
              </div>
              <div className={classes.field}>
                <Field
                  type="text"
                  label="First Name"
                  name="firstName"
                  placeholder="Erlich"
                  mobile={mobile}
                  component={FormField}
                />
              </div>
              <div className={classes.field}>
                <Field
                  type="text"
                  label="Last Name"
                  name="lastName"
                  placeholder="Bachman"
                  mobile={mobile}
                  component={FormField}
                />
              </div>
              <div className={classes.field}>
                <Field
                  type="password"
                  label="Enter a Password"
                  name="registerPassword"
                  placeholder="password1"
                  mobile={mobile}
                  component={FormField}
                />
              </div>
              <div className={classes.field}>
                <Field
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  placeholder="password1"
                  mobile={mobile}
                  component={FormField}
                />
              </div>
              <div className={classes.buttons}>
                <StyledButton
                  label="Register"
                  type="submit"
                  name="submit"
                  mobile={mobile}
                  primary
                  disabled={pristine || submitting}
                  className={classes.btn}
                />
              </div>
            </form>
            <div className={classes.btmContainer}>
              {registered ? history.push("/login") : ""}
              <span className={mobile ? classes.mobileLink : classes.link}>
                <br />
                <div className={classes.linkContainer}>
                  Have an account?{" "}
                  <Link className="bright-blue" to="/Login">
                    Sign in
                  </Link>
                </div>
                <br />
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const CardReduxForm = reduxForm({
  form: "CardForm", // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ["username_email", "confirmPassword"]
})(withStyles(styles)(CardFormComponent));

const mapStateToProps = state => {
  return {
    registered: state.users.registered,
    confirmUserNameMsg: confirmValue(state.users.confirmUserNameMsg),
    mobile: state.mobile
  };
};

const ConnectedCardForm = connect(mapStateToProps)(CardReduxForm);

export const CardForm = ConnectedCardForm;

function confirmValue(data) {
  if (typeof data === "undefined") {
    return "";
  }
  return data;
}
