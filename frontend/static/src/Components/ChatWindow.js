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
      <li key={message.id}>
        <p>{JSON.stringify(message.message)}</p>
        <p>{message.created_at}</p>
      </li>
    ))
    return(
      <>
        {messages}
      </>
    )
  }
}

export default ChatWindow
