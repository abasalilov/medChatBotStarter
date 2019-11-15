import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = () => ({
  media: {
    objectFit: "cover"
  },
  heroContent: {
    maxWidth: 700,
    margin: "0 auto"
  }
});

const HeroSectionComponent = props => {
  const {
    sectionProps: { heroProps },
    classes,
    mobile
  } = props;
  return (
    heroProps && (
      <React.Fragment>
        <div className={classes.heroContent} id="About-Us">
          <Typography
            variant={mobile ? "display4" : "h2"}
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {heroProps.title}
          </Typography>
          {heroProps.hasImage ? (
            <CardMedia
              component="img"
              className={classes.media}
              height={mobile ? "700" : "350"}
              image={heroProps.imageUrl}
            />
          ) : null}
          <Typography
            variant={mobile ? "h3" : "h5"}
            align="center"
            color="textSecondary"
          >
            {heroProps.secondaryText}
          </Typography>
        </div>
      </React.Fragment>
    )
  );
};

/* eslint-enable */
export const HeroSection = withStyles(styles)(HeroSectionComponent);

HeroSection.propTypes = {
  classes: PropTypes.object,
  mobile: PropTypes.bool
};
