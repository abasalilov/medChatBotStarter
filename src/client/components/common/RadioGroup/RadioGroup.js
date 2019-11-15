import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import green from "@material-ui/core/colors/green";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  mobile: {
    fontSize: "1.8rem !important",
    margin: "1rem !important",
    color: "#3F51B5"
  },
  reg: {
    color: "#3F51B5"
  }
};

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no: false,
      yes: false
    };
  }

  handleChange(v) {
    const { handleCheckBoxChange } = this.props;
    // this.setState({});
    if (v === "no") {
      this.setState({ no: true, yes: false });
    } else {
      this.setState({ no: false, yes: true });
    }
    handleCheckBoxChange(v);
  }

  render() {
    const { classes, mobile } = this.props;
    const { no, yes } = this.state;

    const labelClassName = mobile ? classes.mobile : classes.reg;
    const classesObj = {
      root: classes.root,
      checked: classes.checked
    };

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={no}
              onChange={() => this.handleChange("no")}
              value="no"
              classes={classesObj}
            />
          }
          label="No"
          classes={{ label: labelClassName }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={yes}
              onChange={() => this.handleChange("yes")}
              value="yes"
              classes={classesObj}
            />
          }
          classes={{ label: labelClassName }}
          label="Yes"
        />
      </FormGroup>
    );
  }
}

export const RadioGroup = withStyles(styles)(CheckboxGroup);
