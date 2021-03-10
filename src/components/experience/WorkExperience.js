import React, { Component } from "react";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import "./experience.css";

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
    };
  }

  render() {
    return (
      <div className="experience">
        <p className="section-title">Work Experience</p>
      </div>
    );
  }
}

export default WorkExperience;
