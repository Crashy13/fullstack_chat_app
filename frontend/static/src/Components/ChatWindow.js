import React from 'react'

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
        <p className="message_display">{JSON.stringify(message.message)}</p>
        <p className="date-field">{message.created_at}</p>
      </li>
      </ul>
    ))
    return(
      <>
        {messages}
      </>
    )
  }
}

export default ChatWindow
