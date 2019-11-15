import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Close from "@material-ui/icons/Close";
import { StyledButton } from "../../components/common";
import { BasicCalculatorForm } from "../BasicCalculatorForm";
import {
  registerUser as createRegisterUserAction,
  confirmUniqueUsername
} from "../../actions";
import {
  required,
  alphaNumeric,
  minLength6,
  email,
  confirmValue,
  isUUIDError
} from "../../utils";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const asyncValidate = (values, dispatch) => {
  if (values.username_email) {
    return dispatch(confirmUniqueUsername(values.username_email));
  }
  return sleep(10).then(a => console.log("a", a));
};

const renderInterestSelect = input => {
  return (
    <Select
      style={{
        border: "solid #049347 2px",
        borderRadius: "8px",
        backgroundColor: "#fff"
      }}
      {...input}
      value={input.value}
      onChange={input.onChange}
      inputProps={{
        style: {
          color: "#000",
          fontSize: "20px",
          textDecoration: "none"
        }
      }}
    >
      <option value={"2.000"}>2.000%</option>
      <option value={"2.125"}>2.125%</option>
      <option value={"2.250"}>2.250%</option>
      <option value={"2.375"}>2.375%</option>
      <option value={"2.500"}>2.500%</option>
      <option value={"2.625"}>2.625%</option>
      <option value={"2.750"}>2.750%</option>
      <option value={"2.875"}>2.875%</option>
      <option value={"3.000"}>3.000%</option>
      <option value={"3.125"}>3.125%</option>
      <option value={"3.250"}>3.250%</option>
      <option value={"3.375"}>3.375%</option>
      <option value={"3.500"}>3.500%</option>
      <option value={"3.625"}>3.625%</option>
      <option value={"3.750"}>3.750%</option>
      <option value={"3.875"}>3.875%</option>
      <option value={"4.000"}>4.000%</option>
      <option value={"4.125"}>4.125%</option>
      <option value={"4.250"}>4.250%</option>
      <option value={"4.375"}>4.375%</option>
      <option value={"4.500"}>4.500%</option>
      <option value={"4.625"}>4.625%</option>
      <option value={"4.750"}>4.750%</option>
      <option value={"4.875"}>4.875%</option>
      <option value={"5.000"}>5.000%</option>
      <option value={"5.125"}>5.125%</option>
      <option value={"5.250"}>5.250%</option>
      <option value={"5.375"}>5.375%</option>
      <option value={"5.500"}>5.500%</option>
      <option value={"5.625"}>5.625%</option>
      <option value={"5.750"}>5.750%</option>
      <option value={"5.875"}>5.875%</option>
      <option value={"6.000"}>6.000%</option>
      <option value={"6.125"}>6.125%</option>
      <option value={"6.250"}>6.250%</option>
      <option value={"6.375"}>6.375%</option>
      <option value={"6.500"}>6.500%</option>
      <option value={"6.625"}>6.625%</option>
      <option value={"6.750"}>6.750%</option>
      <option value={"6.875"}>6.875%</option>
      <option value={"7.000"}>7.000%</option>
      <option value={"7.125"}>7.125%</option>
      <option value={"7.250"}>7.250%</option>
      <option value={"7.375"}>7.375%</option>
      <option value={"7.500"}>7.500%</option>
      <option value={"7.625"}>7.625%</option>
      <option value={"7.750"}>7.750%</option>
      <option value={"7.875"}>7.875%</option>
      <option value={"8.000"}>8.000%</option>
      <option value={"8.125"}>8.125%</option>
      <option value={"8.250"}>8.250%</option>
      <option value={"8.375"}>8.375%</option>
      <option value={"8.500"}>8.500%</option>
      <option value={"8.625"}>8.625%</option>
      <option value={"8.750"}>8.750%</option>
      <option value={"8.875"}>8.875%</option>
      <option value={"9.000"}>9.000%</option>
      <option value={"9.125"}>9.125%</option>
      <option value={"9.250"}>9.250%</option>
      <option value={"9.375"}>9.375%</option>
      <option value={"9.500"}>9.500%</option>
      <option value={"9.625"}>9.625%</option>
      <option value={"9.750"}>9.750%</option>
      <option value={"9.875"}>9.875%</option>
      <option value={"10.000"}>10.000%</option>
      <option value={"10.125"}>10.125%</option>
      <option value={"10.250"}>10.250%</option>
      <option value={"10.375"}>10.375%</option>
      <option value={"10.500"}>10.500%</option>
      <option value={"10.625"}>10.625%</option>
      <option value={"10.750"}>10.750%</option>
      <option value={"10.875"}>10.875%</option>
      <option value={"11.000"}>11.000%</option>
      <option value={"11.125"}>11.125%</option>
      <option value={"11.250"}>11.250%</option>
      <option value={"11.375"}>11.375%</option>
      <option value={"11.500"}>11.500%</option>
      <option value={"11.625"}>11.625%</option>
      <option value={"11.750"}>11.750%</option>
      <option value={"11.875"}>11.875%</option>
      <option value={"12.000"}>12.000%</option>
      <option value={"12.125"}>12.125%</option>
      <option value={"12.250"}>12.250%</option>
      <option value={"12.375"}>12.375%</option>
      <option value={"12.500"}>12.500%</option>
      <option value={"12.625"}>12.625%</option>
      <option value={"12.750"}>12.750%</option>
      <option value={"12.875"}>12.875%</option>
    </Select>
  );
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

function getModalStyle(mobile) {
  return {
    top: "30%",
    left: mobile ? "25%" : "35%",
    transform: `translate(-20%, -25%)`,
    width: mobile ? "75%" : "70%"
  };
}

const onSubmit = (values, dispatch, props) =>
  dispatch(createRegisterUserAction(values));

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    width: "100% !important",
    marginTop: "8px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: "1rem",
    padding: "1rem",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    overflowY: "visible",
    borderRadius: "1rem"
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  modalCloseBtn: {
    border: "solid black 1px",
    borderRadius: "50%",
    alignSelf: "center",
    fontSize: "2rem",
    marginBottom: "4rem"
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  btnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    flexDirection: "column"
  },
  modalRoot: {
    flexGrow: 1,
    height: "100%",
    overflowY: "scroll"
  },
  btn: {
    margin: "1rem auto",
    width: "90%",
    fontSize: "1rem"
  },
  link: {
    margin: "1rem",
    fontSize: "4rem auto 0 auto"
  },
  buttons: {
    display: "flex",
    justifyContent: "center"
  },
  mobileLink: {
    margin: "3rem auto 0 auto"
  },
  linkContainer: {
    color: "black",
    whiteSpace: "pre"
  },
  field: {
    justifyContent: "center"
  },
  regLink: {
    textDecoration: "none",
    color: "#000"
  },
  title: {
    margin: "2rem 0",
    fontSize: "4rem"
  }
});

{
  /* <FormControl variant="filled" className={classes.formControl}>
<InputLabel
  style={{
    fontSize: labelFontSize ? labelFontSize : "20px",
    color: "#000",
    paddingTop: ".4rem",
    marginLeft: "-.3rem"
  }}
  shrink={labelShrink}
>
  {label}
</InputLabel>
<Select
  style={{
    border: "solid #049347 2px",
    borderRadius: "8px",
    backgroundColor: "#fff"
  }}
  {...input}
  value={input.value}
  onChange={input.onChange}
  inputProps={{
    style: {
      color: "#000",
      fontSize: "20px",
      textDecoration: "none"
    }
  }}
>
  <option value={15}>15</option>
  <option value={20}>20</option>
  <option value={25}>25</option>
  <option value={30}>30</option>
</Select>
</FormControl> */
}

const renderTextField = ({
  label,
  input,
  classes,
  meta: { touched, invalid, error },
  type,
  labelShrink,
  name,
  labelFontSize,
  ...custom
}) => {
  if (label === "Interest Rate (%)") {
    return (
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel
          style={{
            fontSize: labelFontSize ? labelFontSize : "20px",
            color: "#000",
            paddingTop: ".4rem",
            marginLeft: "-.3rem"
          }}
          shrink={labelShrink}
        >
          {label}
        </InputLabel>
        {renderInterestSelect(input)}
      </FormControl>
    );
  }
  if (type === "dropdown") {
    return (
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel
          style={{
            fontSize: labelFontSize ? labelFontSize : "20px",
            color: "#000",
            paddingTop: ".4rem",
            marginLeft: "-.3rem"
          }}
          shrink={labelShrink}
        >
          {label}
        </InputLabel>
        <Select
          style={{
            border: "solid #049347 2px",
            borderRadius: "8px",
            backgroundColor: "#fff"
          }}
          {...input}
          value={input.value}
          onChange={input.onChange}
          inputProps={{
            style: {
              color: "#000",
              fontSize: "20px",
              textDecoration: "none"
            }
          }}
        >
          <option value={"professional"}>Pro (one time charge of $29)</option>
          <option value={"free"}>Standard (free)</option>
        </Select>
      </FormControl>
    );
  }
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      fullWidth
      helperText={touched && error}
      {...input}
      {...custom}
      style={{
        border: "solid #049347 2px",
        borderRadius: "8px",
        backgroundColor: "#fff"
      }}
      margin="normal"
      InputProps={{
        type,
        style: {
          marginLeft: ".3rem"
        }
      }}
      InputLabelProps={{
        style: {
          fontSize: labelFontSize ? labelFontSize : "20px",
          color: "#000",
          marginLeft: ".3rem"
        },
        shrink: labelShrink
      }}
    />
  );
};

const RegistrationModalComponent = props => {
  const {
    classes,
    open,
    closeClick,
    mobile,
    confirmUserNameMsg,
    handleSubmit,
    pristine,
    submitting,
    registered
  } = props;
  const error = isUUIDError(confirmUserNameMsg)
    ? confirmUserNameMsg
    : undefined;
  const emailError = { error, touched: true };
  /*eslint-disable*/
  return (
    <Modal
      aria-labelledby="ade-registration-title"
      aria-describedby="ade-registration-description"
      open={open}
    >
      <div style={getModalStyle(mobile)} className={classes.paper}>
        <div className={classes.modalRoot}>
          <Grid
            container
            spacing={mobile ? 8 : 10}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <div className={classes.topContainer}>
                <Typography
                  variant="h5"
                  align="center"
                  color="textPrimary"
                  className={classes.title}
                  gutterBottom
                >
                  Registration Form
                </Typography>
                <Close onClick={closeClick} className={classes.modalCloseBtn} />
              </div>

              <form onSubmit={handleSubmit}>
                <Field
                  name="username_email"
                  type="text"
                  className={classes.field}
                  placeholder="Enter email address"
                  margin={"none"}
                  label="Email/Username"
                  mobile={mobile}
                  showborder
                  emailError={emailError}
                  meta={emailError}
                  component={renderTextField}
                  validate={[required, email, minLength6]}
                  warn={alphaNumeric}
                />
                <Field
                  type="text"
                  label="First Name"
                  name="firstName"
                  placeholder="Don"
                  margin={"none"}
                  mobile={mobile}
                  component={renderTextField}
                  validate={[required]}
                  warn={alphaNumeric}
                  className={classes.field}
                />
                <Field
                  type="text"
                  className={classes.field}
                  label="Last Name"
                  name="lastName"
                  placeholder="Junkin"
                  margin={"none"}
                  mobile={mobile}
                  component={renderTextField}
                  validate={[required]}
                  warn={alphaNumeric}
                />
                <Field
                  name="loanAmount"
                  label={"Loan Amount (USD$)"}
                  type="number"
                  component={renderTextField}
                  mobile={false}
                  max="20"
                />
                <Field
                  name="interestRate"
                  component={renderTextField}
                  label={"Interest Rate (%)"}
                  classes={classes}
                  mobile={false}
                />
                <Field
                  name="term"
                  component={renderTextField}
                  label={"Loan Term (Years)"}
                  type="number"
                  max="3"
                />
                <Field
                  type="password"
                  label="Enter a Password"
                  name="registerPassword"
                  placeholder="password1"
                  margin={"none"}
                  className={classes.field}
                  mobile={mobile}
                  component={renderTextField}
                  validate={[required, minLength6]}
                  warn={alphaNumeric}
                />
                <Field
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  placeholder="password1"
                  margin={"none"}
                  className={classes.field}
                  mobile={mobile}
                  component={renderTextField}
                  validate={[required, minLength6]}
                  warn={alphaNumeric}
                />

                <Field
                  name="profileType"
                  component={renderTextField}
                  label={"Profile Type"}
                  margin={"none"}
                  classes={classes}
                  type={"dropdown"}
                />

                <div className={classes.buttons}>
                  <StyledButton
                    type="submit"
                    label="Register"
                    onSubmit={handleSubmit}
                    className={classes.btn}
                    disabled={pristine || submitting}
                    mobile={mobile}
                  />
                </div>
              </form>
              <div className={classes.btnContainer}>
                {registered ? closeClick() : ""}
                <span className={mobile ? classes.mobileLink : classes.link}>
                  <Typography
                    variant={mobile ? "h3" : "h6"}
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    Have an account?
                    <Link
                      className={classes.regLink}
                      to="/login#register"
                      onClick={closeClick}
                    >
                      <strong> Sign In</strong>
                    </Link>
                  </Typography>
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Modal>
  );
};
/*eslint-enable*/

const registrationForm = reduxForm({
  form: "registration", // a unique identifier for this form
  validate,
  asyncValidate,
  onSubmit,
  asyncBlurFields: ["username_email", "confirmPassword"]
})(withStyles(styles)(RegistrationModalComponent));

const mapStateToProps = state => {
  return {
    registered: state.users.registered,
    confirmUserNameMsg: confirmValue(state.users.confirmUserNameMsg),
    mobile: state.mobile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => {
      dispatch(createRegisterUserAction(user));
    }
  };
};

const ConnectedRegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(registrationForm);

export const RegistrationModal = ConnectedRegistrationForm;

RegistrationModalComponent.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  closeClick: PropTypes.func,
  mobile: PropTypes.bool,
  pristine: PropTypes.bool,
  open: PropTypes.bool,
  submitting: PropTypes.bool,
  registered: PropTypes.bool
};
