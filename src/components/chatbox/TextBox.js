import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import IconButton from "@material-ui/core/IconButton";

export default class TextBox extends Component {
  render() {
    return (
      <div className="textbox">
        <Paper component="form" className="textbox-paper">
          <InputBase
            className="textbox-inputbase"
            value={this.props.value}
            placeholder="Type Message"
            onKeyPress={this.props.onKeyPress}
            onChange={this.props.onChange}
          />
          <div className="textbox-input-file">
            <input
              accept="image/*,video/*,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/pdf,.pdf"
              id="icon-file-upload"
              type="file"
            />
            <label htmlFor="icon-file-upload">
              <span>
                <IconButton className="textbox-iconButton">
                  <CameraAltIcon />
                </IconButton>
              </span>
            </label>
          </div>
        </Paper>
      </div>
    );
  }
}
