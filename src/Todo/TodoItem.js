import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'



function TodoItem ({todo, idx, removeItem}) {
  const {onToggle} = useContext(Context)
  
  const classes = []
  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li>  
      <span className={classes.join(' ')}>
        <input 
          type='checkbox'
          onChange= { onToggle.bind(null, todo.id) }
        /> 
        <strong>{ idx + 1 }</strong> &nbsp;  { todo.title } 
      </span>
      <button onClick= { () => removeItem(todo.id) }> &times; </button>
    </li>
  )
}

TodoItem.propTypes = {
  idx: PropTypes.number,
  todo: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default TodoItem


