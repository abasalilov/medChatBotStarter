import React from "react";
import DateFnsUtils from "@date-io/date-fns/build";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        left: "135px !important"
      }
    },
    MuiPickersBasePicker: {
      container: {}
    }
  }
});

class CalendarPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      touched: false,
      open: false
    };
    this.changeDate = this.changeDate.bind(this);
    this.handleFlip = this.handleFlip.bind(this);
  }

  componentDidMount() {
    const { setInitial, value } = this.props;
    if (setInitial) {
      let date = new Date(value);
      this.setState({ date });
    }
  }

  changeDate(e) {
    const dt = e.toLocaleString();
    this.setState({ date: e, touched: true });
    this.props.onChange(dt);
    this.handleFlip();
  }

  handleFlip() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { date, open, touched } = this.state;
    const { label, labelFontSize } = this.props;
    const simpleDate = this.state.date.toString().slice(0, 16);
    return (
      <MuiThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {open ? (
            <DatePicker
              variant="static"
              style={{
                color: "#000",
                fontSize: "20px",
                backgroundColor: "#FFF"
              }}
              {...this.props}
              autoOk
              openTo="date"
              value={date}
              style={{ width: "100%" }}
              placeholder={"here yo"}
              InputProps={{
                style: {
                  backgroundColor: "#fff",
                  color: "#000",
                  paddingTop: ".4rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginLeft: ".4rem",
                  textDecoration: "none"
                },
                disableUnderline: true
              }}
              onChange={this.changeDate}
            />
          ) : (
            <TextField
              label={!touched ? label : simpleDate}
              placeholder={!touched ? label : simpleDate}
              fullWidth
              style={{
                border: "solid #049347 2px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                fontWeight: "900"
              }}
              margin="normal"
              InputProps={{
                style: {
                  marginLeft: ".3rem",
                  textDecoration: "none",
                  textAlign: "center"
                },
                disableUnderline: true
              }}
              onClick={this.handleFlip}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                  color: !touched ? "rgb(45, 49, 144)" : "#000000",
                  marginLeft: ".3rem",
                  fontWeight: "900"
                },
                shrink: false
              }}
            />
          )}
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

export const CalendarPicker = CalendarPickerComponent;
