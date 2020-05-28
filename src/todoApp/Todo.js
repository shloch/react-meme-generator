import React, { Component } from 'react'
import TodoItem from './TodoItem'
import Data from './todoData'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: Data
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.data.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
          // console.log(`comlpeted reverse = ${!todo.completed}`)
        }
        return todo
      })
      //console.log(updatedTodos)
      return {
        data: updatedTodos
      }
    })
  }


  render() {
    const todoItemComponnts = this.state.data.map(todo => <TodoItem key={todo.id} todoItem={todo} handleChange={this.handleChange} />)
    return (
      <div className="todo-list" >
        {todoItemComponnts}
        {/* <button onMouseOver={this.handleClick}> CLICK ME OOOH</button> */}
      </div>
    )
  }
}

export default Todo
