import React, { Component } from "react";
import SendButton from "./SendButton";
import TextBox from "./TextBox";
import MessageBox from "./MessageBox";
export default class ChatBox extends Component {
  state = {
    messageInTextBox: "",
    botMessage: "",
    messageList: []
  };
  onTextBoxValueChange = (e) => {
    this.setState({
      messageInTextBox: e.target.value,
    });
  };
  onPressEnterInTextBox = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.processMessage(e.target.value);
      this.setState({ messageInTextBox: "" });
    }
  };
  onSendButtonClick = () => {
    this.processMessage(this.state.messageInTextBox);
    this.setState({ messageInTextBox: "" });
  };
  addMessage = (source) => {
    let messageList = this.state.messageList;
    let messageToAdd =
      source === "user" ? this.state.messageInTextBox : this.state.botMessage;
    let messageObject = { message: messageToAdd, type: source };
    this.setState({ messageList: [...messageList, messageObject] }, () =>
      console.log(this.state.messageList)
    );
  };

  //process messages
  processMessage = async (userMessage) => {
    if (userMessage !== "") {
      // set user message
      this.addMessage("user");

      //get bot reply
      let botMessage = await this.onMessage(userMessage);
      botMessage = botMessage.data.botMessage;
      //set bot reply
      this.setState({ botMessage: botMessage }, () => this.addMessage("bot"));
    }
  };

  //  promise to return bot reply
  onMessage = (userMessage) => {
    return Promise.resolve({
      data: {
        botMessage: "Pardon my ignorance. I am just a dummy.",
      },
    });
  };
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    let messageItems = this.state.messageList.map((element, index) => {
      return (
        <MessageBox key={index} message={element.message} type={element.type} />
      );
    });
    return (
      <div className="chatbox">
        <div className="chatabox-message-canvas">
          {messageItems}
          <div
          
            ref={(el) => {
              this.messagesEnd = el;
            }}
          ></div>
        </div>

        <div className="chatbox-control">
          <div className="chatbox-control-input">
            <TextBox
              value={this.state.messageInTextBox}
              onKeyPress={this.onPressEnterInTextBox}
              onChange={this.onTextBoxValueChange}
            ></TextBox>
          </div>
          <div className="chatbox-control-send">
            <SendButton onClick={this.onSendButtonClick} />
          </div>
        </div>
      </div>
    );
  }
}
