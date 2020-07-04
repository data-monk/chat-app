import React, { Component } from 'react'
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

export default class SendButton extends Component {
    render() {
        return (
            <div className="sendButton">
                <IconButton onClick={this.props.onClick} >
                    <SendIcon size="medium" ></SendIcon>
                </IconButton>
            </div>
        )
    }
}
