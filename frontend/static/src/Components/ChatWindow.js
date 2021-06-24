import React from 'react'
import MessageInputs from './MessageInputs'
import Cookies from 'js-cookie'
import Moment from 'react-moment';
import MessageDetail from './MessageDetail'


class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isEditing: null,
      text: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    fetch('/api/v1/chatmessages/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ messages: data }));
  }

  updateMessage(chatMessage) {

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(chatMessage),
    }

    fetch(`/api/v1/chatmessages/${chatMessage.id}/`, options)
      .then(response => response.json())
      .then(data => {
        const messages = [...this.state.messages];
        const index = messages.findIndex(message => message.id === chatMessage.id);
        messages[index] = data;
        this.setState({messages});
      });
  }

  render() {

    const messages = this.state.messages.map(message => (

    <MessageDetail key={message.id} chatMessage={message} updateMessage={this.updateMessage}/>


    ))
    return(
      <>
        <ul>{messages}</ul>
        <MessageInputs addmessage={this.addMessage} />
      </>
    )
  }
}


export default ChatWindow
