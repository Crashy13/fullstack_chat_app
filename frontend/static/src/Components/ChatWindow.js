import React from 'react'
import MessageInputs from './MessageInputs'
import Cookies from 'js-cookie'
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
    this.removeMessage = this.removeMessage.bind(this);
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

  updateMessage(chatMessage) {

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(chatMessage),
      // the content being sent to the backend
    }

    fetch(`/api/v1/chatmessages/${chatMessage.id}/`, options)
      .then(response => response.json())
      // takes the response from the fetch request and turns it into json
      .then(data => {
        const messages = [...this.state.messages];
        // makes a shallow copy of messages
        const index = messages.findIndex(message => message.id === chatMessage.id);
        // finds the index of the message and makes sure the message id is equal to the original chatMessage id to replace it
        messages[index] = data;
        // changes the value of the message to the value of the data that was PUT up
        this.setState({messages});
        // sets state to the new list of messages
      });
  }

  render() {

    const messages = this.state.messages.map(message => (

    <MessageDetail key={message.id} chatMessage={message} updateMessage={this.updateMessage} removeMessage={this.removeMessage}/>


    ))
    return(
      <>
        <ul>{messages}</ul>
        <MessageInputs addmessage={this.addMessage}/>
      </>
    )
  }
}


export default ChatWindow
