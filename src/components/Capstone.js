import React, { Component } from "react";
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./Capstone.css";

class Capstone extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h1 className="site-title">standUp jyrny jyrnyL</h1>
        <ApplicationViews />
      </>
    );
  }
}

export default Capstone;
