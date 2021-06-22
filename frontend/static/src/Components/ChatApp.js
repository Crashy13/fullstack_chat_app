import React from 'react';
import './App.css';
import ChatWindow from './ChatWindow'
import Registration from './Registration'
import Login from './Login'
import Cookies from 'js-cookie'
import Navbar from './Navbar'

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: !!Cookies.get('Authorization') ? 'chatwindow' : 'login'
    }

    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleNavigation(selection) {
    this.setState({ selection });
  }

  async handleRegistration(user) {
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

    if(response.ok) {
    const data = await response.json().catch(handleError);
    Cookies.set('Authorization', `Token ${data.key}`)
    this.setState({ selection: 'chatwindow' })
    }

    }

  async handleLogin(user) {
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

    if(response.ok) {
    const data = await response.json().catch(handleError);
    Cookies.set('Authorization', `Token ${data.key}`);
    this.setState({ selection: 'chatwindow' })
    }

    }

    async handleLogout() {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        }
      };

      const handleError = (err) => console.warn(err);
      const response = await fetch('/rest-auth/logout/', options).catch(handleError);

      if(response.ok) {
        Cookies.remove('Authorization');
        this.setState({ selection: 'login' })
      }
    }






  render(){

    return (
      <>
        <Navbar handleNavigation={this.handleNavigation} isAuth={this.state.selection === 'chatwindow'} handleLogout={this.handleLogout}/>
        <div className="container">
          {this.state.selection === 'login' && <Login handleNavigation={this.handleNavigation} handleLogin={this.handleLogin}/>}
          {this.state.selection === 'registration' && <Registration handleNavigation={this.handleNavigation} handleRegistration ={this.handleRegistration}/>}
          {this.state.selection === 'chatwindow' && <ChatWindow />}
        </div>
      </>
    )
  }
}

export default ChatApp;
