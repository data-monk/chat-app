import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MessageIcon from "@material-ui/icons/Message";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar container">
        <div className="nav-link-bar">
          <NavLink className="nav-link-tab" exact to="/" >
            <MessageIcon className="nav-link-icon" />
            <div className="nav-link-text"> CHAT</div>
          </NavLink>
          <NavLink className="nav-link-tab" exact to="/job" >
            <WorkOutlineIcon className="nav-link-icon" />
            <div className="nav-link-text"> MY JOBS</div>
          </NavLink>
          <NavLink className="nav-link-tab" exact to="/profile" >
            <AccountCircleIcon className="nav-link-icon" />
            <div className="nav-link-text"> PROFILE</div>
          </NavLink>


        </div>
      </div>
    );
  }
}
