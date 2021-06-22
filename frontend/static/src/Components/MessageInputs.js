import React from 'react'
import Cookies from 'js-cookie';

class MessageInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinput: [],
      messages: [],
    }

    this.addMessage = this.addMessage.bind(this)
    this.handleInput = this.handleInput.bind(this)

  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  async addMessage(message) {
    const options = {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(message),
    }

    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/chatmessages/', options).catch(handleError);

    if(response.ok) {
      const data = await response.json().catch(handleError);
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({ selection: 'chatwindow' });
    }
  }



  render() {
    const userinput = this.state.userinput.map(input => (
      <li key={input.id}>
      <p>{userinput.input}</p>
      </li>
    ))
    return(
      <form className="input_field" onSubmit={this.addMessage}>
      <input className="type_input" type="text" name="message" value={this.state.message} onChange={this.handleInput}/>
      <button className="button_input" type="submit">Send</button>
      </form>
    )
  }
}

export default MessageInputs
