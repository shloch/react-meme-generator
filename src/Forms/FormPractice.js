import React, { Component } from 'react'
import DisplayFormInfo from './displayFormInfo'
import FormSkeleton from './FormSkeleton'

class FormPractice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      surname: '',
      country: '',
      redBerries: false,
      apple: false,
      salad: false,
      cakes: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('form submitted')
    this.renderFormInfos()
  }

  renderFormInfos() {
    // const { name, surname, country } = this.state
    // return <DisplayFormInfo name={name} surname={surname} country={country} />
  }

  handleChange(e) {
    // console.log(e.target.value)
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
    const { name, surname, country, redBerries, apple, salad, cakes } = this.state

    let foodTastesArray = []
    if (redBerries) foodTastesArray.push('Red Berries,')
    if (apple) foodTastesArray.push('Apple,')
    if (salad) foodTastesArray.push('Salad,')
    if (cakes) foodTastesArray.push('Cakes,')

    return (
      <div>
        <FormSkeleton
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <br />
        <hr />
        <DisplayFormInfo name={name} surname={surname} country={country} foodTastesArray={foodTastesArray} />
      </div>
    )
  }
}

export default FormPractice
