import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Footer from './Footer'
// import Navbar from './Navbar'
// import MainComtent from './MainContent'
// import Todo from './todoApp/Todo'
// import Joke from './jokes/Joke'
// import Conditional from './conditional'
// import CatAPI from './CatAPI'
// import TestForm from './Forms/testForm/TestForm'
// import FormPractice from './Forms/FormPractice'
import Meme from './memeGenerator/index'

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
        {/* <Navbar /> */}
        {/* <h1>{this.state.count}</h1> */}
        {/* <MainComtent /> */}
        {/* <Todo /> */}
        {/* <Footer /> */}
        {/* <Conditional isLoading={this.state.isLoading} /> */}
        {/* <CatAPI /> */}
        {/* <TestForm /> */}
        {/* <FormPractice /> */}
        <Meme />
      </div>

    );
  }

}

export default App;
