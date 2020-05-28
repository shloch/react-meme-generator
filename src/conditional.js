
import React, { Component } from 'react'

class Conditional extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogged: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      };
    })

  }

  message = () => {
    return (this.state.isLogged) ? 'Welcome ....You are logged in' : 'Welcome to the App....click to login';
  }


  render() {

    const buttonMsg = (this.state.isLogged) ? 'Logout' : 'Login';
    const text = this.message();
    return (
      <div>
        <h2> {text} </h2>
        <button onClick={this.handleClick}> {buttonMsg}</button>
      </div>
    )
  }
}

export default Conditional

