import React, { Component } from "react";
import Resume from "./Resume";
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

  handleExpandChange(entry) {
    this.setState({ entry: entry });
  }

  render() {
    return (
      <div className="experience">
        <p className="section-title">Work Experience</p>
        <Resume
          expanded={this.state}
          onExpandChange={this.handleExpandChange}
        />
      </div>
    );
  }
}

export default WorkExperience;
