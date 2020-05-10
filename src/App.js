import React from 'react';
import Todo from './Todo/Todo'
import AddTodo from './Todo/AddTodo'
import Context from './context'
import Loader from './Loader'


function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(state => {
      setTodos(state)
      setLoading(false)
    })
  }, [])

  function removeItem (id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function onToggle(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function addTodo(value) {
    const add = [{
      id: Date.now(),
      completed: false,
      title: value
    }]
    setTodos(todos.concat(add))
  }

  return (
    <Context.Provider value={{ onToggle }}>
      <div  className='wrapper'>
        <div className = 'title'> 
          <h1>React project</h1> 
        </div>
        
        <AddTodo onCreate = {addTodo}/>
        { loading && <Loader /> }

        { todos.length 
        ? (<Todo todos = { todos } removeItem = { removeItem } /> ) 
        : loading
          ? null
          : (<p> No tasks </p> )}
      
      
    </div>
  </Context.Provider>
 
  )
}



export default App;
