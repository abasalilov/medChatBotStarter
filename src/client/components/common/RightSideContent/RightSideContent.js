import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  content: {
    textAlign: "left"
  },
  href: {
    textDecoration: "none",
    color: "blue"
  }
};

/* eslint-disable */

class RightSideComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="w3-row" id="about">
        <div className="window-trans-padded w3-content bordered-box">
          <div className={classes.content}>
            <h5 className="bright-blue">Upcoming ade campaigns & TGEs:</h5>
            <li>
              <a
                href={"https://www.shapecoin.io/"}
                target="_blank"
                className={classes.href}
              >
                ShapeCoin
              </a>
            </li>
            <li>
              <a
                href={"http://partsdetectico.io/"}
                target="_blank"
                className={classes.href}
              >
                PD
              </a>
            </li>
            <h5 className="bright-blue">Blog Posts:</h5>
            <li>Bleeding Edge Crypto Projects</li>
            <li>Regulatory</li>
          </div>
        </div>
      </div>
    );
  }
}

export const RightSideContent = withStyles(styles)(RightSideComponent);

RightSideComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string
};

// We bring leadership to all dimensions of the token sale, including:

// •  White paper drafting.
// •  Video content creation.
// •  Token sale website creation.
// •  Token and secure wallet development.
// •  Technical implementation.
// •  PR and marketing.
