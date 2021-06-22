import React from 'react'
import MessageInputs from './MessageInputs'

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



  render() {
    const messages = this.state.messages.map(message => (
      <ul>
      <li key={message.id}>
        <p>{JSON.stringify(message.username)}</p>
        <p className="message_display">{JSON.stringify(message.message)}</p>
        <p className="date-field">{message.created_at}</p>
      </li>
      </ul>
    ))
    return(
      <>
        {messages}
        <MessageInputs />
      </>
    )
  }
}

export default ChatWindow
