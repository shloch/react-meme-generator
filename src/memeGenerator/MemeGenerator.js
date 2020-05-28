import React, { Component } from 'react'
import './memeGenerator.css'

class MemeGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "simpson.jpeg",
      textColor: 'orange',
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {

    //-----------------------------------
    // let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //   targetUrl = 'https://aws.random.cat/meow?ref=apilist.fun'
    fetch('https://api.imgflip.com/get_memes')
      .then(Response => Response.json())
      .then(apiData => {
        // console.log(apiData.data.memes)
        this.setState({
          allMemeImgs: apiData.data.memes
        })
      })
      .catch(e => {
        console.log(e);
        return e;
      });
    //-----------------------------------

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // eslint-disable-next-line no-dupe-class-members
  handleSubmit(e) {
    e.preventDefault()
    const { allMemeImgs } = this.state
    // line below gets random element from array
    let randomImageElement = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)];
    this.setState({
      randomImg: randomImageElement.url
    })

  }

  render() {
    const { topText, bottomText, randomImg, textColor } = this.state;
    const backgroundStyle = { backgroundImage: "url(" + randomImg + ")" }
    const textColorStyle = { color: textColor }
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <label>
            Top Text :
          <input type="text" value={topText} name="topText" onChange={this.handleChange} />
          </label>

          <label>
            Bottom Text
          <input type="text" value={bottomText} name="bottomText" onChange={this.handleChange} />
          </label>

          Select text color :
          <select value={textColor} name='textColor' onChange={this.handleChange}>
            <option value="orange">--select--</option>
            <option value="white">white</option>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="black">black</option>
          </select>
          <br /><br />

          <br /><button>GENERATE NEW IMAGE</button>
        </form>

        <div className="meme" style={backgroundStyle}>
          {/* <img src={randomImg} alt="" /> */}
          <h1 className="topText" style={textColorStyle}>{topText}</h1><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <h1 className="bottomText" style={textColorStyle}>{bottomText}</h1>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
