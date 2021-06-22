import React from 'react';
import './App.css';
import ChatWindow from './ChatWindow'
import MessageInputs from './MessageInputs'
import Registration from './Registration'
import Login from './Login'
import Cookies from 'js-cookie'

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleRegistration = this.handleRegistration.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  async handleLogin(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/login/', options).catch(handleError);
    const data = await response.json().catch(handleError);

    console.log(user)
    if(data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
    }

    }

  async handleRegistration(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/registration/', options).catch(handleError);
    const data = await response.json().catch(handleError);

    console.log(user)
    if(data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
    }

    }


  render(){
    return (
      <>
        <header>MESSENGER</header>
        <Registration />
        <Login />
        <div className="container">
          <div className="window">
          <ChatWindow messages={this.state.messages} />
          <MessageInputs userinput={this.state.input} />
          </div>
        </div>
      </>
    )
  }
}

export default ChatApp;
