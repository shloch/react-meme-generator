import React, { Component } from 'react'

class DisplayFormInfo extends Component {
  render() {
    const { name, surname, country, foodTastesArray } = this.props
    let foodTastesStr = ''
    for (const food of foodTastesArray) {
      foodTastesStr += ` ${food}`
    }
    return (
      <div>
        <h2> You just submitted</h2>
        <strong> Name</strong> : {name} <br />
        <strong>Surname</strong> : {surname} <br />
        <strong>Country</strong> : {country} <br />
        <strong>Food choices </strong> : {foodTastesStr}

      </div>
    )
  }
}

export default DisplayFormInfo
