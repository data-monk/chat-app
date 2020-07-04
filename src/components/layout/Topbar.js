import React, { Component } from "react";
import Icon from "../../media/icon_min.jpg";

export default class Topbar extends Component {
  render() {
    return (
      <div className="topbar container">
        <div className="logo" >
     
          <img className="logo-img"src={Icon} alt={"logo"}></img>
        </div>

        <div className="logo-text">
          Job Finder
        </div>
      </div>
    );
  }
}
