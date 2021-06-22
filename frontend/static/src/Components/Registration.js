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

      // this.handleSubmit = this.handleSubmit.bind(this)
      this.handleRegistration = this.handleRegistration.bind(this)
      this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
      this.setState({[e.target.name]: e.target.value})
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

    // handleSubmit(e) {
    //   e.preventDefault()
    //   this.props.handleRegistration(this.state);
    // }


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
