import React, { Component } from 'react';
import './App.css';
import Meme from './components/memeGenerator/index'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {

  }


  render() {

    return (
      <div className="App">
        <Meme />
      </div>

    );
  }

}

export default App;
