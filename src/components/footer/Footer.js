import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, List } from "@material-ui/core";
const scrollTo = require("scroll-to");
import "./Footer.css";

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
  show: {
    display: "inline-block",
  },
  hide: {
    display: "none",
  },
}));

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const classes = useStyles();

  const socials = [
    {
      name: "GitHub",
      hoverIcon: "fab fa-github",
      hoverColor: "",
      href: "https://github.com/ewirtz3",
    },
    {
      name: "LinkedIn",
      hoverIcon: "fab fa-linkedin-in",
      hoverColor: "",
      href: "https://www.linkedin.com/in/emily-wirtz",
    },
    {
      name: "Twitter",
      hoverIcon: "fab fa-twitter",
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
            <Button
              key={i}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              <span className={hovered ? classes.hide : classes.show}>
                <a href={site.href} target="_blank">
                  {site.name}
                </a>
              </span>

              <span className={hovered ? classes.show : classes.hide}>
                <i className={site.hoverIcon}>
                  <a href={site.href} target="_blank"></a>
                </i>
              </span>
            </Button>
          );
        })}
      </List>
    </footer>
  );
}
