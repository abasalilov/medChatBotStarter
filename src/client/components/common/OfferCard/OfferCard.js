import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Text } from "../../common";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 220
  },
  mobileMedia: {
    height: 500
  },
  mobileContent: {},
  content: {
    height: "9rem"
  },
  actions: {},
  mobileBtn: {
    fontSize: "2rem",
    margin: "0 auto"
  },
  mobileCard: {
    maxWidth: "680 !important"
  }
};

function MediaCard(props) {
  const { classes, option, imgURL, onClick, mobile } = props;
  const { h5, description, name, cardName } = option;
  const cardClassName = mobile ? classes.mobileCard : classes.card;
  const mediaClassName = mobile ? classes.mobileMedia : classes.media;
  const contentClassName = mobile ? classes.mobileContent : classes.content;
  const buttonClassName = mobile ? classes.mobileBtn : classes.actions;
  return (
    <Card className={cardClassName} onClick={onClick}>
      <CardActionArea name={cardName}>
        <CardMedia className={mediaClassName} image={imgURL} title={h5} />
        <CardContent className={contentClassName}>
          <Typography gutterBottom variant={mobile ? "h3" : "h5"}>
            {h5}
          </Typography>
          <Text mobile={mobile} component={mobile ? "h3" : "p"}>
            {description}
          </Text>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          size={mobile ? "large" : "small"}
          color="primary"
          className={buttonClassName}
          value={cardName}
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export const OfferCard = withStyles(styles)(MediaCard);
