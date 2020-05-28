import React, { Component } from 'react'

class FormSkeleton extends Component {

  render() {
    const { name, surname, country, redBerries, apple, salad, cakes, } = this.props.data
    const { handleSubmit, handleChange } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name :
            <input type='text' name='name' value={name} onChange={handleChange} />
          </label><br /><br />

          <label>
            Surname :
            <input type='text' name='surname' value={surname} onChange={handleChange} />
          </label><br /><br />

          Select country :
          <select value={country} name='country' onChange={handleChange}>
            <option value="">--select--</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Liberia">Liberia</option>
          </select>
          <br /><br />

          Select food <br />
          <label>
            <input
              type="checkbox"
              checked={redBerries}
              name='redBerries'
              onChange={handleChange}
            />
            Red Berries
          </label><br />

          <label>
            <input
              type="checkbox"
              checked={apple}
              name='apple'
              onChange={handleChange}
            />
            Apple
          </label><br />

          <label>
            <input
              type="checkbox"
              checked={salad}
              name='salad'
              onChange={handleChange}
            />
            Salad
          </label><br />

          <label>
            <input
              type="checkbox"
              checked={cakes}
              name='cakes'
              onChange={handleChange}
            />
            Cakes
          </label><br />

          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default FormSkeleton
