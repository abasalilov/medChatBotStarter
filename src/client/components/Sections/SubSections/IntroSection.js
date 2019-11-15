import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Image } from "../../common";

const styles = () => {
  return {
    pic: {
      margin: "0 auto",
      textAlign: "center"
    },
    mobilePic: {
      width: "22rem",
      height: "22rem",
      verticalAlign: "middle",
      display: "block",
      margin: "auto"
    },
    introHeader: {
      alignItems: "center",
      height: "30%",
      marginTop: "1rem"
    },
    mobileIntroHeader: {
      marginBottom: "1.5rem",
      marginTop: "9rem"
    },
    heroContent: {},
    mobleImg: {
      width: "22rem"
    },
    imgContainer: {
      width: "100%"
    },
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "2rem"
    },
    linkText: {
      textDecoration: "none",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "2rem"
    },
    introLink: {
      color: "#000",
      "&:hover": {
        color: "#1260DF"
      },
      textDecoration: "none"
    },
    adeText: {
      color: "#000 !important"
    }
  };
};
// #000
//
export const IntroSectionComponent = props => {
  const {
    classes,
    mobile,
    history,
    showHotLink,
    sectionProps: { displayContent }
  } = props;
  const mobileVariantStyle = {
    fontSize: !mobile && "1.3rem",
    margin: "2rem 0"
  };
  const containerClass = mobile ? classes.mobilePic : classes.pic;
  const imgClass = mobile ? classes.mobleImg : classes.imgContainer;

  return (
    <Grid item key={displayContent.title} xs={12}>
      {props.sectionProps.displayType !== "NOLOGO" && (
        <div className={classes.logoContainer}>
          <Image
            showSpinner={false}
            containerClassName={containerClass}
            imgClassName={imgClass}
            src={
              "https://res.cloudinary.com/dbfv0bfmw/image/upload/v1571170225/adeLogo.png"
            }
          />
          <Image
            showSpinner={false}
            containerClassName={containerClass}
            imgClassName={imgClass}
            src={
              "https://res.cloudinary.com/dbfv0bfmw/image/upload/v1571170238/adeLogoPro.png"
            }
          />
        </div>
      )}
      <div className={mobile ? classes.mobileIntroHeader : classes.introHeader}>
        <div className={classes.heroContent}>
          <Typography
            variant={mobile ? "h2" : "h3"}
            align={"center"}
            color="textPrimary"
          >
            <p>{displayContent.title}</p>
          </Typography>
        </div>
      </div>
      {props.sectionProps.displayType === "NOLOGO" && (
        <Typography
          variant="h6"
          align="left"
          color="textSecondary"
          component="p"
          style={mobileVariantStyle}
          gutterBottom
        >
          {displayContent.newTop}
        </Typography>
      )}
      <Typography
        variant="h6"
        align="left"
        color="textSecondary"
        component="p"
        style={mobileVariantStyle}
        gutterBottom
      >
        {displayContent.top}
      </Typography>
      {!mobile && (
        <React.Fragment>
          {!showHotLink && (
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              component="p"
              style={mobileVariantStyle}
              gutterBottom
            >
              {displayContent.middle}
            </Typography>
          )}
          {showHotLink && (
            <Typography
              variant="h6"
              align="left"
              color="textPrimary"
              component="p"
              style={mobileVariantStyle}
              gutterBottom
            >
              Getting a new mortgage? Try our{" "}
              <a href="/anticipated-loan-calculator">simulator</a> to see how
              much you can save using aDayEarly.{" "}
            </Typography>
          )}
          <Typography
            variant="h4"
            align="left"
            style={mobileVariantStyle}
            color="textSecondary"
            gutterBottom
          >
            {displayContent.bottom}
          </Typography>
          {props.sectionProps.displayType !== "NOLOGO" && (
            <div className={classes.linkText}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Typography
                  variant="h5"
                  align="left"
                  className={classes.adeText}
                  gutterBottom
                >
                  Are you a{" "}
                  <a
                    className={classes.introLink}
                    style={{ textDecoration: "none" }}
                    href="/homeowner"
                  >
                    homeowner?
                  </a>
                </Typography>
                <Button
                  onClick={() => history.push("/home")}
                  variant="outlined"
                  size="large"
                  color="primary"
                  style={{
                    width: "80%",
                    margin: "3rem",
                    fontSize: "1rem",
                    textShadow: "1px 1px #7280ce"
                  }}
                >
                  Home Owner
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Typography
                  variant="h5"
                  align="left"
                  gutterBottom
                  className={classes.adeText}
                >
                  Or a{" "}
                  <a
                    className={classes.introLink}
                    style={{ textDecoration: "none" }}
                    href="/lenders"
                  >
                    mortgage lender?
                  </a>
                </Typography>
                <Button
                  onClick={props.handleRedirect}
                  variant="outlined"
                  size="large"
                  color="primary"
                  style={{
                    width: "80%",
                    margin: "3rem",
                    fontSize: "1rem"
                  }}
                >
                  Mortgage Lender
                </Button>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </Grid>
  );
};

export const IntroSection = withStyles(styles)(IntroSectionComponent);
