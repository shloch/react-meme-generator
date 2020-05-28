import React, { Component } from 'react'


class TestForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      mytext: '...',
      isFriendly: true,
      gender: 'female',
      favColor: 'white'
    }

    this.handleCHange = this.handleCHange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log(`A new name was submitted : ${this.state.firstname}  ${this.state.lastname}`)
    e.preventDefault()
  }

  handleCHange(e) {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      this.setState({
        [name]: checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }

  }

  render() {
    const { firstname, lastname, mytext, isFriendly, gender, favColor } = this.state;
    const friendship = (isFriendly) ? 'Friendly' : 'Unfriendly'
    const genderly = (gender === 'male') ? 'Man' : 'Woman'
    const colorFrameStyle = { backgroundColor: favColor }

    return (
      <div className='colorFrame' style={colorFrameStyle}>
        <h2>{firstname}  {lastname}</h2><br />
        <strong>{friendship} {genderly}</strong><br />
        <em>{mytext}</em><br /><br />
        <form onSubmit={this.handleSubmit}>

          <label>
            First Name :
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={this.handleCHange} />
          </label><br />

          <label>
            Last Name :
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={this.handleCHange} />
          </label><br />

          <label>
            isFriendly ? :
            <input
              type="checkbox"
              name="isFriendly"
              checked={isFriendly}
              onChange={this.handleCHange} />
          </label><br />

          <label>
            Gender  : <br />
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={this.handleCHange} />
              Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={this.handleCHange} />
              Female
          </label><br /><br />

          <label> Favorite color :</label>
          <select name="favColor"
            value={favColor}
            onChange={this.handleCHange}>
            <option value='white'>.....</option>
            <option value='#66ffcc'>myGreen</option>
            <option value='#ffffcc'>myYellow</option>
            <option value='#ff99ff'>myRed</option>
          </select><br /><br />

          <textarea
            value={mytext}
            name='mytext'
            onChange={this.handleCHange} /><br />

          <input type="submit" />
        </form>
        <br />  Type and press <kbd>Enter</kbd><br />

      </div>
    )
  }
}

export default TestForm
