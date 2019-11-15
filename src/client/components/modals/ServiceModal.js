import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Close from "@material-ui/icons/Close";

function getModalStyle(mobile) {
  return {
    top: "30%",
    left: mobile ? "20%" : "35%",
    transform: `translate(-20%, -25%)`,
    width: mobile ? "87%" : "50%"
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: "1rem",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    overflowY: "visible"
  },
  modalHeader: {
    textAlign: "center",
    margin: "1rem",
    display: "flex",
    alignItems: "center"
  },
  modalCloseBtn: {
    border: "solid black 1px",
    borderRadius: "50%",
    alignSelf: "center",
    marginTop: "1rem"
  },
  btnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  modalRoot: {
    flexGrow: 1,
    padding: "1rem",
    overflowY: "scroll"
  },
  subText: {
    margin: "1rem"
  },
  subTextData: {
    marginTop: ".75rem",
    marginLeft: "3rem",
    width: "80%"
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column"
  }
});

const getExample = example => {
  const { address, customer, service } = example;
  const fontSize = "1.3rem";

  const noExampleStyle = {
    color: "#000",
    fontWeight: "700",
    textDecoration: "none",
    fontSize
  };

  const exampleStyle = {
    marginTop: "2rem",
    marginLeft: "1rem"
  };

  if (example.address) {
    /* eslint-disable */
    return (
      <div style={exampleStyle}>
        {`See for yourself! Check out the ${customer}`}
        <a href={address} target="_blank" style={noExampleStyle}>
          {` ${service}` + "."}
        </a>
      </div>
    );
  }
  return (
    <div style={exampleStyle}>
      <a style={noExampleStyle} href={"/#Contact-Us"} target="_blank">
        Please contact us to learn more about this service.
      </a>
    </div>
  );
};

const ServiceModalComponent = props => {
  const { classes, open, closeClick, data, mobile } = props;
  const iconStyle = { fontSize: mobile ? "5rem" : "2.5rem" };
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
    >
      <div style={getModalStyle(mobile)} className={classes.paper}>
        <div className={classes.modalRoot}>
          <Typography
            variant={mobile ? "h6" : "h3"}
            id="modal-title"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.modalHeader}
          >
            {data.icon(iconStyle)}
            <div
              style={{
                marginLeft: "2rem",
                fontSize: mobile ? "3.2rem" : "2rem"
              }}
            >
              {data.name}
            </div>
          </Typography>
          <Typography id="simple-modal-description" variant="h6" gutterBottom>
            <div className={classes.subText}>{data.description[0]}</div>

            {data.description.length > 1 && (
              <div className={classes.subText}>{data.description[1]}</div>
            )}

            {data.description.length >= 2 && (
              <div className={classes.subText}>{data.description[2]}</div>
            )}

            {data.list.length > 0 && (
              <div className={classes.subTextData}>
                {data.list.map(item => (
                  <li style={{ marginTop: ".5rem" }} key={item}>
                    {item}
                  </li>
                ))}
              </div>
            )}
            {getExample(data.example)}
          </Typography>
          <div className={classes.bottomSection}>
            <Close
              onClick={closeClick}
              className={classes.modalCloseBtn}
              style={iconStyle}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

ServiceModalComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const ServiceModalWrapped = withStyles(styles)(ServiceModalComponent);

export const ServiceModal = ServiceModalWrapped;
