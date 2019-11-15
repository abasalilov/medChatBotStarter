import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { TranscriberComponent } from "./Transcriber";

class Voice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: "",
      transcribed: "",
      result: "",
      clicked: false
    };
  }

  componentWillMount() {
    // this.props.fetchResult();
  }

  onTranscription(source, recognized, transcribed) {
    this.setState({
      recognized: this.state.recognized + recognized,
      transcribed: this.state.transcribed + transcribed
    });
  }

  clear() {
    this.setState({
      recognized: "",
      transcribed: ""
    });
  }

  renderResults() {
    const { medBot } = this.props;
    const resArr = medBot.result.split(",");
    console.log("resArr", resArr);
    return (
      <div>
        Result:
        {resArr.map(res => {
          return res.length > 0 ? <li>{` ${res}`}</li> : "";
        })}
      </div>
    );
  }

  handleClick() {
    // this.setState({ clicked: true });
    this.props.submitMedBotQuery(this.state.transcribed);
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
    return (
      <div>
        <div>
          <br />
          <h6 style={{ color: "red", paddingTop: ".5em" }}>
            Voice entry mode active now
          </h6>
          <div style={{ border: "2px solid" }}>
            <p>
              <label>Recognized:</label>
              <span className="result">{this.state.recognized}</span>
            </p>
            <br /> <br />
            <p>
              <label>Transcribed:</label>
              <span
                className="result"
                dangerouslySetInnerHTML={{ __html: this.state.transcribed }}
              />
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
              <TranscriberComponent
                id="phoneticTrans"
                dataPath="/cmudict.json"
                textStart="🎤 Begin Phonetic Transcription"
                wrapUnknown="<%s>"
                onTranscription={this.onTranscription.bind(this, "phonetic")}
              />
            </div>
            <br />
            <ul>
              <button
                onClick={this.handleClick.bind(this)}
                style={{
                  backgroundColor: "#5163EF",
                  marginLeft: "40px",
                  width: "90px",
                  color: "white",
                  fontFamily: "Open Sans",
                  border: "solid grey 2px",
                  textAlign: "center"
                }}
              >
                Submit Query
              </button>
              <button
                style={{
                  marginLeft: "40px",
                  width: "auto",
                  color: "black",
                  fontFamily: "Open Sans",
                  textAlign: "center"
                }}
                onClick={this.clear.bind(this)}
              >
                × Clear
              </button>
              <br />
            </ul>
          </div>
          <br />
          <br />
        </div>
        {!this.props.medBot.result ? null : this.renderResults()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { result: state.result, medBot: state.medBot };
}

export const VoiceComponent = connect(
  mapStateToProps,
  actions
)(Voice);
