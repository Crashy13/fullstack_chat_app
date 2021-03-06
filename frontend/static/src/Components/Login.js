import React from 'react';

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
        <div className='login_container'>
          <form onSubmit={this.handleSubmit}>
            <h3>Username</h3>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
            <h3>Email</h3>
            <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
            <h3>Password</h3>
            <input type="password" placeholder="password" name="password" value={this.state.password1} onChange={this.handleInput}/>
            <h5>Press to login</h5>
            <button className="login_button" type="Submit">Login</button>
          </form>
        </div>
      );
    }
  }

export default Login
