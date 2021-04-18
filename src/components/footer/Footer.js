import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const scrollTo = require("scroll-to");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexWrap: "row wrap",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  const onScrollToTop = () => {
    scrollTo(0, 0, {
      ease: "out-bounce",
      duration: 2000,
    });
  };

  return (
    <footer className={classes.root}>
      <Button href="#TOP" color="inherit" onClick={onScrollToTop}>
        Back to top ^
      </Button>
    </footer>
  );
}
