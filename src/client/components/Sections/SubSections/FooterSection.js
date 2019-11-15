import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginBottom: "1rem",
    padding: "1rem",
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  footer: {
    marginTop: "4rem",
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 3}px 0`
  },
  href: {
    textDecoration: "none",
    color: "#000d11"
  },
  mobHref: {
    textDecoration: "none",
    color: "#000d11"
  }
});

const footers = [
  {
    title: "Company",
    description: ["Team", "Contact Us", "Locations"],
    href: "/#About-Us"
  },
  {
    title: "Media",
    description: ["Social Media", "Our Blog"],
    href: "/#Services"
  },
  {
    title: "Resources",
    description: ["Blogs", "Tech"],
    href: "/#Services"
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use", "Terms of service"],
    href: "/terms#tos"
  }
];

export const FooterComponent = props => {
  const { classes, mobile } = props;

  return (
    <footer className={classNames(classes.footer, classes.layout)}>
      <Grid container spacing={mobile ? 8 : 10} justify="space-evenly">
        {footers.map(footer => (
          <Grid item key={footer.title} xs={mobile ? 6 : 3}>
            <Typography
              variant={mobile ? "h3" : "subtitle1"}
              color="textPrimary"
              gutterBottom
              style={{ textDecoration: "underline" }}
            >
              {footer.title}
            </Typography>
            {footer.description.map(item => (
              <Typography
                key={item}
                variant={mobile ? "h4" : "body2"}
                color="textSecondary"
              >
                <a
                  href={footer.href}
                  className={mobile ? classes.mobHref : classes.href}
                >
                  {item}
                </a>
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </footer>
  );
};

FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  mobile: PropTypes.bool
};

export const FooterSection = withStyles(styles)(FooterComponent);
