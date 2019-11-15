import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  mobile: {
    fontSize: "2.2rem !important"
  }
});

const MobileTextComponent = props => {
  const { children, classes, dispatch, mobile, ...rest } = props;
  return (
    <Typography className={classes.mobile} {...rest}>
      {children}
    </Typography>
  );
};

const RegTextComponent = props => {
  const { children, dispatch, ...rest } = props;
  return <Typography {...rest}>{children}</Typography>;
};

const TextComponent = props => {
  return props.mobile ? (
    <MobileTextComponent {...props} {...props.input} />
  ) : (
    <RegTextComponent {...props} />
  );
};

export const StyledText = withStyles(styles)(TextComponent);

const mapStateToProps = state => ({
  mobile: state.mobile
});

export const Text = connect(
  mapStateToProps,
  null
)(StyledText);

TextComponent.propTypes = {
  classes: PropTypes.object,
  mobile: PropTypes.bool.isRequired
};
