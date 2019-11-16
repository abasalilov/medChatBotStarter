import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import SpeechRecognition from "react-speech-recognition";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Mic from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import Typography from "@material-ui/core/Typography";

const iconStyle = {
  color: "#1260DF !important",
  fontSize: "3rem",
  borderRadius: "50%",
  border: "solid #1260DF 1px"
};

class Voice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: "",
      transcribed: "",
      result: "",
      clicked: false
    };
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  componentDidMount() {
    this.stopRecording();
  }

  onTranscription(source, recognized, transcribed) {
    this.setState({
      recognized: this.state.recognized + recognized,
      transcribed: this.state.transcribed + transcribed
    });
  }

  startRecording() {
    this.props.startListening();
  }

  stopRecording() {
    this.props.stopListening();
  }

  clear() {
    this.setState({
      recognized: "",
      transcribed: ""
    });
  }

  renderResults() {
    const { transcript } = this.props;
    return <div>Result: `${transcript}`</div>;
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.setState({result: this.props.result})
    this.setState({
      recognized: this.state.recognized,
      transcribed: this.state.transcribed,
      result: this.props.result
    });
  }

  render() {
    const {
      resetTranscript,
      browserSupportsSpeechRecognition,
      listening
    } = this.props;
    if (!browserSupportsSpeechRecognition) {
      return (
        <div>
          Voice Transcription Not Supported on this Browser, try Chrome.
        </div>
      );
    }

    return (
      <div
        style={{
          marginTop: "8rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "60rem"
          }}
        >
          <br />
          {listening ? (
            <Typography
              variant="h6"
              align="left"
              style={{ marginBottom: "2rem", color: "red" }}
            >
              Voice entry mode active now
            </Typography>
          ) : (
            <Typography
              variant="h6"
              align="left"
              style={{ marginBottom: "2rem", color: "#1260DF" }}
            >
              Voice entry mode inactive, click mic icon to begin.
            </Typography>
          )}
          <div style={{ border: "2px solid #1260DF" }}>
            <p>
              <Typography variant="h6" align="left" style={{ margin: "1rem" }}>
                Transcribed :
                <span className="result">{` ${this.props.transcript}`}</span>
              </Typography>
            </p>
            <br /> <br />
          </div>
          <br />
          <div
            style={{ height: "30px", display: "flex", flexDirection: "row" }}
          >
            <div
              style={{ width: "auto", color: "white", fontFamily: "Open Sans" }}
            >
              <IconButton
                aria-label="Toggle password Mic"
                onClick={listening ? this.stopRecording : this.startRecording}
                disableRipple={true}
                style={{
                  margin: "0 1rem 1rem 0"
                }}
              >
                {listening ? (
                  <MicOff style={iconStyle} />
                ) : (
                  <Mic style={iconStyle} />
                )}
              </IconButton>
              ;
            </div>
            <br />
            <ul>
              <button
                style={{
                  marginLeft: "40px",
                  width: "auto",
                  color: "black",
                  fontFamily: "Open Sans",
                  textAlign: "center"
                }}
                onClick={resetTranscript}
              >
                <Typography variant="h6" align="center">
                  x Clear
                </Typography>
              </button>
              <br />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { result: state.result, medBot: state.medBot };
}

const WrappedVoice = SpeechRecognition(Voice);
export const VoiceComponent = connect(mapStateToProps, actions)(WrappedVoice);
