import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MwveKepqCos?start=187"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
