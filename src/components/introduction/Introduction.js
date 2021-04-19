import React from "react";
import "./introduction.css";
import { makeStyles } from "@material-ui/core/styles";
import profilePic from "./oslPic.png";
import "./introduction.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirectin: "row",
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
  text: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    minWidth: "600px",
  },
  title: {
    textTransform: "uppercase",
  },
  image: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
  },
}));

export default function Introduction() {
  const classes = useStyles();

  return (
    <div className={classes.root + " root"}>
      <div className={classes.image}>
        <img src={profilePic} alt="emily wirtz" className={classes.large} />
        <p className={classes.title}>
          Traveler, puzzle builder, Spotify playlist maker
        </p>
      </div>
      <div className={classes.text + " text"}>
        <p className="introduction-text">
          Hey I'm Emily! I'm from Kansas City, Missouri, though I've also lived
          in Omaha, Costa Rica, and San Francisco. I have a B.A. in Spanish and
          Hispanic Studies, with a minor in Business Administration from
          Creighton University. I also completed my certificate for Full Stack
          Web Development through the University of Kansas.
        </p>
        <p className="introduction-text">
          I'm a Software Engineer currently located in Kansas City, but open to
          relocating for the right position where I can grow and make an impact.
          I enjoy problem solving and critical thinking, and learning to code
          has been an enormous exercise in using both to piece a new language
          together. I love that there will always be something new to learn, and
          different ways to make existing languages do innovative things. My
          strengths for now are React.js, JavaScript, HTML, and CSS. I'm also
          dabbling in Java and working on my Data Structures and Algorithms.
        </p>
        <p className="introduction-text">
          Before I started my journey into coding, I worked my way through the
          food service industry. Hosting, serving, and ultimately managing gave
          me the skills to interact with all sorts of people, prioritize and
          re-prioritize many moving parts at once, and take responsibility for
          my work. Another significant work experience was tackling Operations
          at a fine jewelry e-commerce company in San Francisco. There, I worked
          my way up from associate to manager, learning the ins and outs of
          shipping and receiving and operations as a whole. Aside from
          maintaining the ability to keep up with the rapidly rising volume, it
          was a pleasure to be able to work through operational issues and ideas
          overall with our NetSuite team, creatively solving problems and
          brainstorming company goals.
        </p>
        <p className="introduction-text">
          I'm looking for my first Software Engineering role, at a company where
          I can dig into coding and get my hands dirty, leveraging my current
          skills while continuing to learn new ones. I thrive in fast-paced
          environments where I can juggle priorities, and collaborate across
          teams to solve real world problems. I chose coding because I knew it
          would challenge me for the rest of my career, and I can't wait to see
          where it takes me next.
        </p>
        <p className="introduction-text">
          Please feel free to reach out, I would love to hear from you! My email
          is ewirtz3@gmail.com
        </p>
      </div>
    </div>
  );
}
