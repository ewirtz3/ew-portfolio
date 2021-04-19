import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Chip,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./resumeAccordion.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75vw",
  },
  display: {
    display: "flex",
    flexWrap: "row wrap",
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
}));

export default function ResumeAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (panel) => (event, isExpanded) => {
    console.log(panel);
    setExpanded(isExpanded ? panel : false);
  };

  const resume = [
    {
      panel: "aci",
      title: "Corporate Services Coordinator",
      company: "American Century Investments",
      dates: "March 2020 - present",
      location: "Kansas City, MO",
      responsibilities: [
        "Managing purchasing and invoices for IT equipment and services across vendors and within Workday",
        "Internal shipping/receiving of employee IT equipment across employee homes and 7 offices globally",
        "Deploying IT shipments to India and Hong Kong, eliminating $60k cost from using third party vendor",
        "Leading efforts to define new process for employees to create and track requests to ship/receive documents and IT equipment, moving away from current email process",
      ],
      skills: [
        "Project management",
        "Vendor relationship management",
        "Operations",
      ],
    },
    {
      panel: "BE",
      title: "Operations Associate, Operations Lead, Operations Manager",
      company: "Brilliant Earth",
      dates: "February 2015 - August 2018",
      location: "San Francisco, CA",
      responsibilities: [
        "Led Fulfillment Team with 5 direct reports to meet several daily deadlines in order to successfully receive, process, create materials for, and ship 200-300 packages per day",
        "Collaborated with other Operations Managers to create and accomplish quarterly departmental and company goals, including opening 5 new showroom locations, planning for the holiday jewelry season, and creating a vendor portal for diamond and manufactoring vendors",
        "Utilized NetSuite searches to track metrics, report bugs, and effectively tie up countless loose ends at the end of every shipping day",
        "Served as main point of contact for manufacturing and shipping vendors, ensuring they were able to effectively and accurately drop ship 10-20 orders per day per vendor",
        "Became a leader in training across both Operations and Sales, effectively training to some capacity 100% of new hires in SF",
        "Instrumental in a complete overhaul of the Fulfillment process, moving from an Excel sheet and manually-printed FedEx labels in order to ship 60-70 packages daily when I started, to scheduled label and materials scripts and Shipping QA buttons to be able to ship 200-300 packages daily",
        "Continually created and improved upon team processes to achieve higher efficiency and accuracy",
      ],
      skills: [
        "Project management",
        "Vendor relationship management",
        "Operations",
        "People management",
        "NetSuite",
        "Employee training",
        "Collaboration",
      ],
    },
  ];

  return (
    <div className={classes.root}>
      {resume.map((role, i) => {
        const panelLabel = role.panel;
        return (
          <Accordion
            key={i}
            value={role.panel}
            expanded={expanded === panelLabel}
            onChange={handleExpandClick(panelLabel)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={role.panel + "bh-content"}
              id={role.panel + "bh-header"}
              className={classes.display}
            >
              <Typography className={classes.heading}>{role.title}</Typography>
              <Typography className={classes.secondaryHeading}>
                {role.company}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {role.responsibilities.map((duty, j) => {
                return <Typography key={j}>{duty}</Typography>;
              })}
              {role.skills.map((skill, k) => {
                return <Chip size="small" label={skill} key={k} />;
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
