import React, { Component } from 'react'

class CatAPI extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      cat: {
        file: 'accomplished.jpg'
      }
    }
  }

  componentDidMount() {

    //-----------------------------------
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://aws.random.cat/meow?ref=apilist.fun'
    fetch(proxyUrl + targetUrl)
      .then(Response => Response.json())
      .then(data => {
        console.log(data)
        this.setState({
          loading: true,
          cat: data
        })
      })
      .catch(e => {
        console.log(e);
        return e;
      });
    //-----------------------------------

  }

  render() {
    const catStyle = {
      height: "600px",
      width: "600px"
    }

    return (
      <div>
        <h2>Random cat API</h2>
        <img src={`${this.state.cat.file}`} alt="cat" style={catStyle} />
      </div>
    )
  }
}

export default CatAPI
