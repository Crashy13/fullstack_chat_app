import React from 'react';
import './App.css';
import ChatWindow from './ChatWindow'
import MessageInputs from './MessageInputs'

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render(){
    return (
      <>
        <header>MESSENGER</header>
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
