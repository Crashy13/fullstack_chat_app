import React from 'react';
import Cookies from 'js-cookie'

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.handleLogin(this.state)
    }


    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
          <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
          <input type="password" placeholder="password" name="password" value={this.state.password1} onChange={this.handleInput}/>
          <button type="Submit">Login</button>
        </form>
      );
    }
  }

export default Login
