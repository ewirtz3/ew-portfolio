import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  List,
  ListItem,
  Icon,
  ListItemText,
  Chip,
} from "@material-ui/core";

export default function Resume(props) {
  const resume = [
    {
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
    <>
      {resume.map((role, i) => {
        return (
          <div className="timeline-entry">
            <Card key={i}>
              <CardHeader title={role.title} subheader={role.company} />
              <CardContent>
                {role.dates}
                <br />
                {role.location}
                <br />
                <div className="role-description">
                  <List>
                    {role.responsibilities.map((duty, i) => {
                      return (
                        <ListItem key={i}>
                          <Icon className="far fa-star" />
                          <ListItemText primary={duty} />
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
                <div className="role-skills">
                  {role.skills.map((skill, i) => {
                    return <Chip size="small" label={skill} />;
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}
