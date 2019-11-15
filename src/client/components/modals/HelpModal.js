import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Close from "@material-ui/icons/Close";
import { StyledButton, FormField } from "../../components/common";
import { submitContactUsEmail as createSubmitEmailAction } from "../../actions";

function getModalStyle(mobile) {
  return {
    top: "30%",
    left: mobile ? "25%" : "35%",
    transform: `translate(-20%, -25%)`,
    width: mobile ? "75%" : "50%"
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: "1rem",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    overflowY: "visible"
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
    margin: "3rem auto 0 auto",
    fontSize: "2rem"
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
    fontSize: "1rem",
    margin: "1rem"
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
    fontSize: "2rem"
  },
  pending: {
    margin: "1rem",
    padding: "1rem",
    border: "solid #000 3px"
  }
});

class HelpModalComponent extends React.Component {
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
    this.props.closeClick();
  }

  renderPending() {
    const { classes } = this.props;
    return <div className={classes.pending}>Pending please wait....</div>;
  }

  render() {
    const { classes, open, closeClick, mobile } = this.props;
    /*eslint-disable*/
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
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
                <Typography
                  variant="h5"
                  align="center"
                  color="textPrimary"
                  className={classes.title}
                  gutterBottom
                >
                  Help Request Form
                </Typography>
                <div className={classes.fields}>
                  {this.props.emailStatus.pending && this.renderPending()}
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
                      disable={this.props.emailStatus.pending}
                      onClick={this.handleClear}
                    />
                    <StyledButton
                      type="submit"
                      label="Submit"
                      className={classes.btn}
                      mobile={mobile}
                      disable={this.props.emailStatus.pending}
                      onClick={this.handleEmailSubmit}
                    />
                  </div>
                </div>
                <div className={classes.btnContainer}>
                  <Close
                    onClick={closeClick}
                    className={classes.modalCloseBtn}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Modal>
    );
  }
}
/*eslint-enable*/

const HelpModalForm = withStyles(styles)(HelpModalComponent);

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

const ConnectedHelpModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpModalForm);

export const HelpModal = ConnectedHelpModal;

HelpModalComponent.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  closeClick: PropTypes.func,
  mobile: PropTypes.bool,
  pristine: PropTypes.bool,
  open: PropTypes.bool,
  submitting: PropTypes.bool,
  registered: PropTypes.bool
};
