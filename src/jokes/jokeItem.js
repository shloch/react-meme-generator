import React from 'react'

export default function jokeItem(props) {

  const question = (props.question) ? `Question: ${props.question},` : ''
  const punchline = props.punchline



  return (
    <div>
      <p> ==> {question} {punchline} </p>

    </div>
  )
}
