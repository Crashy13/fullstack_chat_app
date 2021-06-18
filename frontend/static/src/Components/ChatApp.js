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
        <ChatWindow messages={this.state.messages} />
        <MessageInputs userinput={this.state.input} />
      </>
    )
  }
}

export default ChatApp;
