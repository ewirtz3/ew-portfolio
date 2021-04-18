import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, List, ListItem } from "@material-ui/core";
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
  socials: {
    display: "flex",
    flexWrap: "row wrap",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  const socials = [
    {
      name: "GitHub",
      hoverIcon: "",
      hoverColor: "",
      href: "https://github.com/ewirtz3",
    },
    {
      name: "LinkedIn",
      hoverIcon: "",
      hoverColor: "",
      href: "https://www.linkedin.com/in/emily-wirtz",
    },
    {
      name: "Twitter",
      hoverIcon: "",
      hoverColor: "",
      href: "https://twitter.com/emdotwirtz",
    },
  ];

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
      <List className={classes.socials}>
        {socials.map((site, i) => {
          return (
            <ListItem key={i}>
              <a href={site.href} target="_blank">
                {site.name}
              </a>
            </ListItem>
          );
        })}
      </List>
    </footer>
  );
}
