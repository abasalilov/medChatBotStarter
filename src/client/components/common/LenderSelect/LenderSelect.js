import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";

const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const labelStyle = {
  color: "#3f51b5",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)"
};

class LenderSelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.onLenderSelect(event.target.value);
  }

  render() {
    const { value } = this.state;
    const { options } = this.props;
    return (
      <FormControl style={{ width: "11rem" }}>
        <InputLabel>
          <Typography variant="h6" style={labelStyle} align="left">
            Lender
          </Typography>
        </InputLabel>
        <Select
          value={value}
          onChange={this.handleChange}
          inputProps={{
            name: "Lender"
          }}
        >
          {options.map(option => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  }
}

const StyledSelect = withStyles(styles)(LenderSelectComponent);

// const mapStateToProps = state => {
//   return {
//     registered: state.input
//   };
// };

// const ConnectedSelect = connect(mapStateToProps)(StyledSelect);

export const LenderSelect = StyledSelect;
