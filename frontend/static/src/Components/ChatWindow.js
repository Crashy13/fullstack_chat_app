import React from 'react'
import MessageInputs from './MessageInputs'
import Cookies from 'js-cookie'
import Moment from 'react-moment';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/chatmessages/')
      .then(response => response.json())
      .then(data => this.setState({ messages: data }));
  }

  removeMessage(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }

    fetch(`/api/v1/chatmessages/`, options)
      .then(response => {
        const messages = [...this.state.messages];
        const index = messages.findIndex(message => message.id === id);
        messages.splice(index, 1);
        this.setState({messages})
      })
  }

  editMessage(id) {
    const message = {
      title: 'Message',
    }

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(message),
    }

    fetch(`/api/v1/chatmessages/`, options)
      .then(response => response.json())
      .then(data => console.log(data));
  }


  render() {
    const messages = this.state.messages.map(message => (
      <ul>
      <li key={message.id}>
        <p className="username">{message.username}</p>
        <p className="message_display">{JSON.stringify(message.message)}</p>
        <Moment format="MM/DD/YYYY hh:mm:ss" className="date-field">{message.created_at}</Moment>
        <button type='button' onClick={() => this.editMessage(message.id)}>Edit</button>
        <button type='button' onClick={() => this.removeMessage(message.id)}>Delete</button>
      </li>
      </ul>
    ))
    return(
      <>
        {messages}
        <MessageInputs addmessage={this.addMessage} />
      </>
    )
  }
}

export default ChatWindow
