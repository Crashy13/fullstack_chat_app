import React from 'react';
import Cookies from 'js-cookie'

class Registration extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.handleRegistration(this.state);
    }


    render() {
      return (
        <form onSubmit={this.handleRegistration}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
          <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
          <input type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
          <input type="password" placeholder="enter password again" name="password2" value={this.state.password2} onChange={this.handleInput}/>
          <button type="Submit">Register</button>
        </form>
      );
    }
  }

export default Registration
