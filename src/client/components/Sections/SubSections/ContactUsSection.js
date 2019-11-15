import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { FormField, StyledButton } from "../../common";
import { submitContactUsEmail as createSubmitEmailAction } from "../../../actions";

const labelStyle = {
  color: "#3f51b5",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
  padding: "1rem",
  marginTop: "4rem"
};

const styles = () => ({
  fields: {
    display: "flex",
    flexDirection: "column",
    border: "solid #51a391 2px",
    borderRadius: "1rem",
    padding: "1rem"
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "1rem"
  },
  btn: {
    margin: "1rem",
    width: "90%"
  }
});

class ContactUsSectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestType: "",
      message: "",
      name: ""
    };

    this.handleReqTypeChange = this.handleReqTypeChange.bind(this);
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleMessageUpdate = this.handleMessageUpdate.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleReqTypeChange(e) {
    this.setState({ requestType: e.target.value });
  }

  handleUpdateName(e) {
    this.setState({ name: e.target.value });
  }

  handleMessageUpdate(e) {
    this.setState({ message: e.target.value });
  }

  handleClear() {
    this.setState({ message: "", name: "", requestType: "" });
  }

  async handleEmailSubmit() {
    const { requestType, message, name } = this.state;
    const msgText = `${name} has asked to be contacted by ${requestType}, message: ${message}`;
    await this.props.submitEmail({ message: msgText });
  }

  render() {
    const { classes, mobile } = this.props;
    const formStyle = {
      width: "60rem",
      fontSize: "2.5rem"
    };
    return (
      <React.Fragment>
        <Divider style={{ width: "100%" }} />
        <Grid container justify="center" id="Contact-Us">
          <Typography
            variant="h2"
            style={labelStyle}
            align="center"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Grid item>
            <div>
              <div className={classes.fields} style={formStyle}>
                <FormField
                  label={"From"}
                  margin={mobile ? "none" : "normal"}
                  meta={{ touched: false, error: false }}
                  mobile={mobile}
                  type={"input"}
                  onChange={this.handleUpdateName}
                  placeholder={"Name"}
                  showborder={1}
                  value={this.state.name}
                  variant="outlined"
                />
                <FormField
                  label={"Type of Request"}
                  margin={mobile ? "none" : "normal"}
                  mobile={mobile}
                  meta={{ touched: false, error: false }}
                  showborder={1}
                  onChange={this.handleReqTypeChange}
                  placeholder={
                    mobile ? "Phone? Email?" : "Phone? Email? Media query?"
                  }
                  type={"input"}
                  value={this.state.requestType}
                  variant="outlined"
                />
                <FormField
                  label="Message"
                  margin={mobile ? "none" : "normal"}
                  meta={{ touched: false, error: false }}
                  mobile={mobile}
                  multiline
                  rows="4"
                  rowsMax="10"
                  showborder={1}
                  onChange={this.handleMessageUpdate}
                  placeholder={
                    "Please be specific regarding the service(s) you are inquiring about."
                  }
                  value={this.state.message}
                  variant="outlined"
                />
                <div
                  className={classes.btns}
                  style={{ marginTop: mobile ? "1rem" : ".5rem" }}
                >
                  <StyledButton
                    label="Clear"
                    className={classes.btn}
                    mobile={mobile}
                    onClick={this.handleClear}
                  />
                  <StyledButton
                    type="submit"
                    label="Submit"
                    className={classes.btn}
                    mobile={mobile}
                    onClick={this.handleEmailSubmit}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: state.mobile,
    emailStatus: state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitEmail: message => dispatch(createSubmitEmailAction(message))
  };
};

const ContactUs = withStyles(styles)(ContactUsSectionComponent);

const ConnectedContactUsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUs);
/* eslint-enable */

export const ContactUsSection = ConnectedContactUsPage;

ContactUsSectionComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  submitEmail: PropTypes.func,
  mobile: PropTypes.bool
};
