import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Link,
  Typography,
  Chip,
  Grid,
} from "@material-ui/core";
import weatherDashPic from "./weatherDashPic.jpg";
import inOrOutPic from "./inOrOut.jpg";
import burgerPic from "./burger.jpg";
import directoryPic from "./userDirectory.jpg";
import projectYou from "./projectYou.jpg";
import jobSpot from "./jobSpotScreenShot.png";
import "./projects.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    paddingTop: "160px",
    paddingBottom: "160px",
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center",
  },
  card: {
    maxWidth: 345,
    minHeight: 450,
  },
  media: {
    height: 200,
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: "10px",
  },
  header: {
    fontFamily: ["Ubuntu", "sans-serif"],
  },
  grid: {
    margin: "15px 15px",
  },
});

export default function Projects() {
  const classes = useStyles();
  const repos = [
    {
      name: "JobSpot",
      description:
        "On the hunt for your next job? Ditch the Excel sheet and use JobSpot to keep your search organized and up-to-date!",
      repoLink: "https://github.com/Anverch/JobSpot",
      appLink: "https://job-spot.herokuapp.com",
      imageSrc: jobSpot,
      imageAlt: "Job search tracking app",
      technologies: [
        "React.js, Passport.js, Express.js, Express-Sessions, Sequelize, MySQL, Semantic UI, JavaScript, Node.js, Bcrypt.js, Axios",
      ],
    },
    {
      name: "Weather Dashboard",
      description:
        "User provides city, is then provided the current forecast as well as the 5-day forecast.",
      repoLink: "https://github.com/ewirtz3/weather-dashboard",
      appLink: "https://ewirtz3.github.io/weather-dashboard/",
      imageSrc: weatherDashPic,
      imageAlt: "Weather Dashboard App",
      technologies: [
        "Moment.js, Local Storage, AJAX, OpenWeather API, JavaScript",
      ],
    },
    {
      name: "Inside or Outside?",
      description:
        "Responsive application which takes in the user input to either provide a 5-day weather forecast or a random cocktail recipe.",
      repoLink: "https://github.com/ewirtz3/inside-or-outside",
      appLink: "https://ewirtz3.github.io/inside-or-outside/",
      imageSrc: inOrOutPic,
      imageAlt: "Cocktails or Weather app",
      technologies: [
        "OpenWeather API, TheCocktailDB API, Bulma.io, Flexbox, Moment.js, JavaScript",
      ],
    },
    {
      name: "Burger Bonanza App",
      description:
        "Heroku-deployed app enables the user to add new burgers to the left side of the page. If the user clicks the Devour It! button, the burger's devoured status changes to true and it reappears ont he right side of the page. Utilizes Express.js, Express Handlebars, MySQL, and an ORM.",
      repoLink: "https://github.com/ewirtz3/burger",
      appLink: "https://intense-dusk-43049.herokuapp.com/",
      imageSrc: burgerPic,
      imageAlt: "Burger Builder App",
      technologies: [
        "Express.js, Express Handlebars, Sequelize, MySQL, Node.js, Heroku, JavaScript",
      ],
    },
    {
      name: "Dynamic Employee Directory",
      description:
        "React-based application that serves as an Employee Directory. Using class and functional React components, the page renders 200 employee info cards using an AJAX call via axios. The list may be sorted alphabetically or filtered by birth month.",
      repoLink: "https://github.com/ewirtz3/user-directory",
      appLink: "https://various-employees.herokuapp.com/",
      imageSrc: directoryPic,
      imageAlt: "Employee Directory App",
      technologies: ["React.js, AJAX, Axios, JavaScript"],
    },
    {
      name: "projectYOU",
      description:
        "Full-stack application serves as a simple tracker for the user to log their minutes of exercise, glasses of water intake, and hours of sleep all in one place. User information is created upon sign up and stored in a database, which is updated as the user logs their health milestones.",
      repoLink: "https://github.com/ewirtz3/projectYOU",
      appLink: "https://projectyou.herokuapp.com/",
      imageSrc: projectYou,
      imageAlt: "Fitness Tracker App",
      technologies: [
        "Node.js, Express.js, MySQL, Sequelize, Express Handlebars, Heroku",
      ],
    },
  ];
  return (
    <div className={classes.root}>
      <Typography
        align="center"
        color="inherit"
        gutterBottom={true}
        variant="h3"
        className={classes.header}
      >
        Projects
      </Typography>
      <Typography
        align="center"
        color="inherit"
        gutterBottom={true}
        variant="h4"
        className={classes.header}
      >
        Check out my work, both solo and as part of a team
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        {repos.map((repo, i) => {
          return (
            <Grid item xs={12} sm={6} key={i}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={repo.imageSrc}
                    title={repo.imageAlt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {repo.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {repo.description}
                    </Typography>
                    {repo.technologies.map((item, j) => {
                      <Chip size="small" label={item} key={j} />;
                    })}
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.links}>
                  <Link href={repo.repoLink} target="_blank" color="primary">
                    View GitHub repository
                  </Link>
                  <Link
                    href={repo.appLink}
                    target="_blank"
                    color="primary"
                    rel="noopener noreferrer"
                  >
                    View application
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
