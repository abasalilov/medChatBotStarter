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
  checked: {}
};

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes,
      fbSelected,
      twitter,
      instaG,
      telegram,
      handleCheckBoxChange
    } = this.props;
    const classesObj = {
      root: classes.root,
      checked: classes.checked
    };
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={fbSelected}
              onChange={() => handleCheckBoxChange("fbSelected")}
              value="fbSelected"
              classes={classesObj}
            />
          }
          label="FaceBook"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={telegram}
              onChange={() => handleCheckBoxChange("telegram")}
              value="telegram"
              classes={classesObj}
            />
          }
          label="Telegram"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={twitter}
              onChange={() => handleCheckBoxChange("twitter")}
              value="twitter"
              classes={classesObj}
            />
          }
          label="Twitter"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={instaG}
              onChange={() => handleCheckBoxChange("instaG")}
              value="instaG"
              classes={classesObj}
            />
          }
          label="Instagram"
        />
      </FormGroup>
    );
  }
}

export const PlatformRadioGroup = withStyles(styles)(CheckboxGroup);
