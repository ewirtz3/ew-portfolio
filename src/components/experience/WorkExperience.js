import React from "react";
import Resume from "./Resume";
import "./experience.css";
import { Link } from "@material-ui/core";
import cv from "./EmilyWirtz_04102021.pdf";

export default function WorkExperience() {
  return (
    <div className="experience">
      <p className="section-title">Work Experience</p>
      <Link
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        underline="hover"
        download
      >
        View full resume
      </Link>
      <Resume />
    </div>
  );
}
