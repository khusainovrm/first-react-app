import React, {useState} from 'react'
import PropTypes from 'prop-types'


 function AddTodo ({onCreate}) {


  function useInputValue (defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
      bind: {
        value,
        onChange: event => setValue(event.target.value)
      },
      clear: () => setValue(''),
      value: () => value  
    }
  }

  const input = useInputValue()

  function createTodo (event) {
    event.preventDefault()
    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }

  }

  return (
    <div>
      <form onSubmit={createTodo}>
        <input {...input.bind}/>
        <button type='submit'> Create </button>
      </form>

    </div>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo
