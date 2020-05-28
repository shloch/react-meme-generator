import React, { Component } from 'react'
import JokeItem from './jokeItem'
import jokesData from './jokesData'

class Joke extends Component {

  render() {

    // const jWithQ = jokesData.filter(j => j.question !== undefined)

    const data = jokesData.map(joke =>
      <JokeItem key={joke.id} question={joke.question} punchline={joke.punchline} />
    );
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default Joke
