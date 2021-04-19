import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Icon } from "@material-ui/core";
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
    width: "100%",
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
  toTop: {
    color: "white",
    margin: theme.spacing(3),
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
      <div className={classes.socials}>
        <Button
          href="#TOP"
          color="inherit"
          onClick={onScrollToTop}
          className={classes.toTop}
        >
          Back to top
          <Icon className="fas fa-chevron-up fa-2x"></Icon>
        </Button>
        {socials.map((site, i) => {
          return (
            <Button
              key={i}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              variant="text"
            >
              <span className={hovered ? classes.show : classes.hide}>
                <a href={site.href} target="_blank">
                  {site.name}
                </a>
              </span>

              <span className={hovered ? classes.hide : classes.show}>
                <Icon className={site.hoverIcon}>
                  <a href={site.href} target="_blank"></a>
                </Icon>
              </span>
            </Button>
          );
        })}
      </div>
    </footer>
  );
}
