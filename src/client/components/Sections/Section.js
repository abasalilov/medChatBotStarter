import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import {
  CARD_LIST,
  INTRO,
  NOLOGO,
  CALCULATOR,
  CONTACT_US,
  HeroSection,
  FooterSection,
  ServiceSection,
  IntroSection,
  ContactUsSection
} from "./SubSections";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: "#FFFFFF"
    },
    html: {
      backgroundColor: "#FFFFFF"
    }
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: "2rem",
    marginBottom: "2rem",
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  header: {
    marginBottom: theme.spacing.unit * 8,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  },
  pic: {
    width: "25rem",
    height: "20rem",
    padding: "1rem"
  },
  mobilePic: {
    width: "15rem",
    padding: "1rem"
  }
});

const SectionComponent = props => {
  const {
    classes,
    sectionProps = {},
    mobile,
    history,
    isLastSection,
    showHotLink
  } = props;
  const { hasHero, displayType } = sectionProps;
  return (
    <React.Fragment>
      <section className={classes.layout} id="Home">
        {/* Hero unit */}
        {hasHero ? (
          <HeroSection mobile={mobile} sectionProps={sectionProps} />
        ) : null}
        {/* End hero unit */}
        {displayType === INTRO ? (
          <Grid container spacing={mobile ? 10 : 5} alignItems="flex-end">
            <IntroSection
              mobile={mobile}
              history={history}
              sectionProps={sectionProps}
              showHotLink={showHotLink}
            />
          </Grid>
        ) : null}
        {displayType === NOLOGO ? (
          <Grid container spacing={mobile ? 10 : 5} alignItems="flex-end">
            <IntroSection
              mobile={mobile}
              history={history}
              showHotLink={showHotLink}
              sectionProps={sectionProps}
            />
          </Grid>
        ) : null}
        {displayType === CALCULATOR ? (
          <Grid container spacing={mobile ? 10 : 5} alignItems="flex-end">
            <ServiceSection
              mobile={mobile}
              sectionProps={sectionProps}
              history={history}
            />
          </Grid>
        ) : null}
      </section>

      {displayType === CONTACT_US ? (
        <section className={classes.layout}>
          <Grid container spacing={mobile ? 10 : 5} alignItems="flex-end">
            <ContactUsSection mobile={mobile} />
          </Grid>
        </section>
      ) : null}
      {/* Footer */}
      {isLastSection ? <FooterSection mobile={mobile} /> : null}
      {/* End footer */}
    </React.Fragment>
  );
};

SectionComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  mobile: PropTypes.bool,
  sectionProps: PropTypes.object
};

export const Section = withStyles(styles)(SectionComponent);
