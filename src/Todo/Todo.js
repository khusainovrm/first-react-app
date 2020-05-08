import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


function Todo (props) {
  return (
    <div >
      <ul >
        {props.todos.map((todo, idx) => {
          return <TodoItem idx={idx} todo={todo} key={todo.id} removeItem = { props.removeItem }/>
          }
        )}
      </ul>
    </div>
  )
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired
}

export default Todo
