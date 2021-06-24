import React from 'react';
import Moment from 'react-moment';
import Cookies from 'js-cookie';


class MessageDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      message: this.props.chatMessage.message,
    }

    this.handleInput = this.handleInput.bind(this);
    this.saveMessage = this.saveMessage.bind(this);

  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  saveMessage() {
    const chatMessage = this.props.chatMessage;
    // calls chatMessage from the parent
    chatMessage.message = this.state.message;
    // sets the message from chatMessage to state
    this.props.updateMessage(chatMessage);
    // calls the method updateMessage from the parent
    this.setState({isEditing: false});
    // changes isEditing back to false so it returns to the default view
  }

  render() {
    const chatMessage = this.props.chatMessage;
    return(
      <li>
        <p className="username">{chatMessage.username}</p>

        {this.state.isEditing
          ? <input type="text" name="message" value={this.state.message} onChange={this.handleInput}/>
          : <p className="message_display">{chatMessage.message}</p>}

        {this.state.isEditing
          ? <button type='button' onClick={this.saveMessage}>Save</button>
          // this.saveMessage called the saveMessage function above
          : <button type="button" onClick={() => this.setState({isEditing: true})}>Edit</button>}

        <button type='button' onClick={() => this.props.removeMessage(chatMessage.id)}>Delete</button>
        <Moment format="MM/DD/YYYY hh:mm:ss" className="date-field">{chatMessage.created_at}</Moment>
      </li>
    )
  }
}

export default MessageDetail
