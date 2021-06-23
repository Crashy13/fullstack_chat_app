import React from 'react'
import MessageInputs from './MessageInputs'
import Cookies from 'js-cookie'
import Moment from 'react-moment';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isEditing: false,
      text: '',
    }
    this.handleInput = this.handleInput.bind(this)
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

  editMessage(id) {
    const message = [...this.state.messages];
    const index = message.findIndex(message => message.id === id);
    message[index].message = message;
    this.setState({message})
  }

  saveMessage(id, message) {

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(message),
    }

    fetch(`/api/v1/chatmessages/${id}/`, options)
      .then(response => {
        const messages = [...this.state.messages];
        const index = messages.findIndex(message => message.id === message.id);
        messages[index].message = message;
        this.setState({messages})
      })
  }


  render() {
    const messages = this.state.messages.map(message => (
      <ul>
      <li key={message.id}>
        <p className="username">{message.username}</p>
        <p className="message_display">{JSON.stringify(message.message)}</p>
        <Moment format="MM/DD/YYYY hh:mm:ss" className="date-field">{message.created_at}</Moment>

        <input type="text" name="text" value={this.state.text} onChange={this.handleInput}/>
        <button type='button' onClick={() => this.saveMessage(message.id)}>Save</button>
        
        <button type="button" onClick={() => this.editMessage(message.id)}>Edit</button>
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
