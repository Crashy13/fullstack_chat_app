import React from 'react'
import Cookies from 'js-cookie'


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

  removeMessage(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }

    fetch(`/api/v1/chatmessages/${id}/`, options)
      .then(response => {
        const messages = [...this.state.messages];
        const index = messages.findIndex(message => message.id === id);
        messages.splice(index, 1);
        this.setState({messages})
      })
  }

  saveMessage() {
    const chatMessage = this.props.chatMessage;
    chatMessage.message = this.state.message;
    this.props.updateMessage(chatMessage);
    this.setState({isEditing: false});
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
          : <button type="button" onClick={() => this.setState({isEditing: true})}>Edit</button>}

        <button type='button' onClick={() => this.removeMessage(chatMessage.id)}>Delete</button>
        <Moment format="MM/DD/YYYY hh:mm:ss" className="date-field">{chatMessage.created_at}</Moment>
      </li>
    )
  }
}

export default MessageDetail
