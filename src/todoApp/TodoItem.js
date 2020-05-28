import React, { Component } from 'react'

// function TodoItem(props) {
//   return (

//     <div>
//       <input type="checkbox"
//         checked={props.todoItem.completed}
//         onChange={() => props.handleChange(props.todoItem.id)}
//       />
//       <span> {props.todoItem.itemName}</span><br />
//     </div>
//   )

// }

class TodoItem extends Component {

  render() {
    // const { todoItem, handleChange } = this.props

    const completedStyle = {
      color: "gray",
      fontStyle: "italic"
    }
    const displayStyle = (this.props.todoItem.completed) ? completedStyle : null;
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todoItem.completed}
          onChange={() => this.props.handleChange(this.props.todoItem.id)}
        />
        <span style={displayStyle}> {this.props.todoItem.itemName}</span><br />
      </div>
    )
  }
}


export default TodoItem



