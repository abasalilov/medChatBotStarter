import React from "react";
import Grid from "@material-ui/core/Grid";

export const FlexContainer = props => {
  const { children, mobile } = props;
  const dir = mobile ? "column" : "row";
  return (
    <Grid
      container
      spacing={mobile ? 4 : 8}
      justify="center"
      alignItems="center"
      direction={dir}
    >
      {children}
    </Grid>
  );
};
