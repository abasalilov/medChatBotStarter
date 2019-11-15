import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ServiceModal } from "../../modals";
import { CalculatorForm } from "../../CalculatorForm";
import TrendingFlat from "@material-ui/icons/TrendingFlat";
import { RegistrationModal } from "../../modals/RegistrationModal";
import { calculate } from "../../CalculatorGraph/calculations";
import { updateAmortGraph as updateGraph } from "../../../actions";
import { connect } from "react-redux";
import { FlyOut } from "../../common";

const styles = theme => ({
  expansionHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: theme.palette.text.secondary,
    width: "100%"
  },
  mobExpansionHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    justifyContent: "center",
    fontSize: "3rem"
  },
  expansionSecondHeading: {
    color: theme.palette.text.secondary,
    marginLeft: "3rem",
    width: "100%"
  },
  expansionMenuTab: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "1rem"
  },
  subMenuOption: {
    border: "solid #000 2px",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: ".5rem 1rem",
    borderRadius: ".5rem",
    margin: ".5rem"
  }
});

const mobileTitle = title => {
  return title;
};

const makeFlyoutMessage = msgs => {
  let missingInterest = false;
  let missingTerm = false;
  let missingAmount = false;
  let count = 0;
  msgs.map(missingField => {
    if (missingField === "interestRate") {
      missingInterest = true;
      count++;
    }
    if (missingField === "term") {
      missingTerm = true;
      count++;
    }
    if (missingField === "loanAmount") {
      missingAmount = true;
      count++;
    }
  });
  let msg = "The following field(s) are required: ";
  if (missingInterest) {
    msg += " Interest Rate";
    if (count > 1) {
      count--;
      msg += ",";
    }
  }
  if (missingTerm) {
    msg += " Loan Term";
    if (count > 1) {
      count--;
      msg += ",";
    }
  }
  if (missingAmount) {
    msg += " Loan Amount";
    if (count > 1) {
      count--;
      msg += ",";
    }
  }
  return msg;
};

class ServiceSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
      showModal: false,
      selectedService: null,
      showRegModal: false,
      showFlyout: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleToggleRegModal = this.handleToggleRegModal.bind(this);
    this.getUpdatedMontlyPayment = this.getUpdatedMontlyPayment.bind(this);
  }

  handleToggleRegModal() {
    this.setState({ showRegModal: false });
  }

  getUpdatedMontlyPayment() {
    const { input } = this.props;
    const { monthlyPayment } = calculate(
      input.loanAmount,
      input.term,
      input.interestRate,
      input.monthlyOverpayment
    );
    return monthlyPayment;
  }

  handleRedirect() {
    const { input } = this.props;
    let redirectToIntPage = Number(input.interestRate) > 4;
    // this.setState({ showRegModal: true });
    if (this.props.input.missingFields.length > 0) {
      this.setState({ showFlyout: true });
    } else if (redirectToIntPage) {
      this.props.history.push("/interest");
    } else {
      this.props.history.push("/calculator#loanInfo");
    }
  }

  handleChange(panel) {
    if (this.state.expanded === panel) {
      this.setState({
        expanded: null,
        showModal: false,
        selectedService: null
      });
    } else {
      this.setState({
        expanded: panel,
        showModal: false,
        selectedService: null
      });
    }
  }

  handleToggleModal(selectedService = {}) {
    const { showModal } = this.state;
    if (showModal) {
      this.setState({
        showModal: false,
        selectedService: null
      });
    } else {
      this.setState({
        showModal: true,
        selectedService
      });
    }
  }

  render() {
    const { classes, mobile, sectionProps, input } = this.props;
    const { showModal, selectedService, showRegModal } = this.state;
    const hasMessages = input.missingFields.length > 0;
    const menuIconStyle = {
      fontSize: mobile ? "4rem" : "2.5rem",
      marginRight: "1rem"
    };

    const moreIconStyle = { fontSize: mobile ? "4rem" : "2.5rem" };
    const exapsionHeaderClassName = mobile
      ? classes.mobExpansionHeader
      : classes.expansionHeader;

    if (showModal) {
      return (
        <ServiceModal
          sectionProps={sectionProps}
          data={selectedService}
          open={showModal}
          mobile={mobile}
          closeClick={this.handleToggleModal}
        />
      );
    }

    if (showRegModal) {
      return (
        <RegistrationModal
          open={showRegModal}
          mobile={mobile}
          closeClick={this.handleToggleRegModal}
        />
      );
    }
    return (
      <React.Fragment>
        <Divider style={{ width: "100%", marginBottom: "2rem" }} id="basics" />
        <Grid
          container
          key={"dsf"}
          justify="space-around"
          alignItems="center"
          direction={"row"}
          id="calculatorTop"
          style={{ marginBottom: "4rem" }}
        >
          <Grid item xs={7}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              direction={"column"}
              style={{
                minWidth: "20%",
                backgroundColor: "#f6f6f6"
              }}
            >
              <Grid item xs={6}>
                <Typography
                  variant={mobile ? "display4" : "h4"}
                  gutterBottom
                  align="center"
                  color="textPrimary"
                  style={{
                    width: "100%",
                    color: "#000",
                    marginBottom: "3rem"
                  }}
                >
                  Let's Start With The Basics
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant={mobile ? "display5" : "h5"}
                  gutterBottom
                  align="center"
                  color="textPrimary"
                  style={{
                    width: "100%",
                    color: "#000"
                  }}
                >
                  (Please fill out 3 of the following fields)
                </Typography>
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  width: "100%",
                  marginRight: "1rem"
                }}
              >
                <CalculatorForm onCalculate={this.props.updatePaymentGraph} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={5}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem"
            }}
          >
            {input.canCalculate && (
              <Button
                onClick={this.handleRedirect}
                variant="outlined"
                size="large"
                color="primary"
                style={{
                  width: "80%",
                  margin: "1rem 1rem 1rem 0",
                  fontSize: "1.5rem",
                  marginLeft: "1rem"
                }}
              >
                Next Step {<TrendingFlat style={{ fontSize: "2rem" }} />}
              </Button>
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const StyledServiceSection = withStyles(styles)(ServiceSectionComponent);

const mapDispatchToProps = dispatch => {
  return {
    updatePaymentGraph: st => dispatch(updateGraph(st))
  };
};

const mapStateToProps = state => ({
  input: state.input
});

export const ServiceSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledServiceSection);
