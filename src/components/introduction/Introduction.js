import React, { Component } from "react";
import "./introduction.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import profilePic from "./oslPic.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: "300px",
    height: "500px",
    borderRadius: "100px",
  },
}));

export default function Introduction() {
  const classes = useStyles();

  return (
    <div className="introduction">
      <div className={classes.root}>
        <img src={profilePic} alt="emily wirtz" className={classes.large} />
      </div>
      <p className="introduction-text">
        Traveler, puzzle builder, Spotify playlist maker.
      </p>
      <p className="introduction-text">
        Enjoys building with JavaScript and React, and never stops learning.
      </p>
      <p className="introduction-text">
        Software Engineer currently located in Kansas City, but open to
        relocating for the right position where I can grow and make an impact.
      </p>
    </div>
  );
}
