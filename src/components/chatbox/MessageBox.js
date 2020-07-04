import React, { Component } from "react";

export default class MessageBox extends Component {
  render() {
    return (
      <div
        className={
          this.props.type === "user" ? "right-message" : "left-message"
        }
      >
        <div className="messageBox">
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}
