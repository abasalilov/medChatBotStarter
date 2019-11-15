import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Image } from "../../components/common";

const styles = {
  bg: {
    height: "40rem",
    border: "dotted blue 2px"
  }
};

const HomePageComponent = props => {
  return (
    <div style={{ width: "100%", height: "100%", marginTop: "8rem" }}>
      <Image
        showSpinner={false}
        src={
          "https://res.cloudinary.com/dbfv0bfmw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1573858024/AEOVJABS.jpg"
        }
      />
    </div>
  );
};

const mapStateToProps = state => ({
  mobile: state.mobile
});

const ConnectedHomePage = connect(
  mapStateToProps,
  null
)(HomePageComponent);

export const HomePage = {
  component: withStyles(styles)(ConnectedHomePage)
};
