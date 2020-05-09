import React, {useState} from 'react'
import PropTypes from 'prop-types'


 function AddTodo ({onCreate}) {
  const [value, setValue] = useState('')

  function createTodo (event) {
    event.preventDefault()
    onCreate(value)
    setValue('')
  }

  return (
    <div>
      <form onSubmit={createTodo}>
        <input value={value} onChange={event => setValue(event.target.value)}/>
        <button type='submit'> Create </button>
      </form>

    </div>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo
