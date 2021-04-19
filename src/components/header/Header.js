import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import regeneratorRuntime from "regenerator-runtime";
import "./header.css";
const scrollTo = require("scroll-to");

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      scrollTo: props.height,
    };
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight + "px",
      scrollTo: window.innerHeight,
    });
  }

  async componentDidMount() {
    console.log(this.props);
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onScrollToIntro() {
    scrollTo(0, this.state.scrollTo, {
      ease: "out-bounce",
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="header-wrapper" style={{ height: this.state.height }}>
        <div className="header">
          <h3>emily wirtz</h3>
          <h6>software engineer</h6>
        </div>
        <div className="scroll-down-btn">
          <Fab
            size="small"
            color="secondary"
            onClick={this.onScrollToIntro.bind(this)}
          >
            <KeyboardArrowDownIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export default Header;
