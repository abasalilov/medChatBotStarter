import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";

const iconStyles = {
  color: "#000",
  marginBottom: ".5rem",
  marginLeft: ".5rem"
};

const flexStules = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alingContent: "center"
};

const HeaderLinkComponent = props => {
  const {
    className,
    to,
    title,
    isHref,
    navKey,
    hasIcon,
    ...otherProps
  } = props;
  let styles = {};
  if (isHref) {
    return (
      <div className={className} key={navKey}>
        <a ref={to} style={{ textDecoration: "none" }}>
          <Typography variant="h6" id="header" align="center">
            {title}
          </Typography>
        </a>
        {hasIcon ? <AccountCircle style={iconStyles} /> : null}
      </div>
    );
  }

  if (hasIcon) {
    styles = flexStules;
  }

  return (
    <div className={className} style={styles} {...otherProps} key={navKey}>
      <Link to={to} style={{ textDecoration: "none" }}>
        <Typography
          variant="h6"
          style={{ color: "#000" }}
          id="modal-title"
          align="center"
          gutterBottom
        >
          {title}
        </Typography>
      </Link>
      {hasIcon ? <AccountCircle style={iconStyles} /> : null}
    </div>
  );
};

export const HeaderLink = HeaderLinkComponent;

HeaderLinkComponent.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  navKey: PropTypes.string,
  isHref: PropTypes.bool
};
