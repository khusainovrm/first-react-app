import React from 'react';
import Todo from './Todo/Todo'
import AddTodo from './Todo/AddTodo'
import Context from './context'


function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: "First task"},
    {id:2, completed: false, title: "Second task"},
    {id:3, completed: false, title: "Third task"},
    {id:4, completed: false, title: "Forth task"} 
    ])


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

        {todos.length ? <Todo todos = { todos } removeItem = { removeItem } /> : <p> No tasks </p>}
      
      
    </div>
  </Context.Provider>
 
  )
}



export default App;
