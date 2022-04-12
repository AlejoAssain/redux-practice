import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem"

function App() {
  const [show, setShow] = useState('all')
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(x => x)
  console.log({ state })

  const submit = e => {
    e.preventDefault()
    if (!value.trim()) {
      return
    }
    const id = Math.random().toString(36)
    const todo = { title: value, completed: false, id }
    dispatch( { type: "todo/add", payload: todo})
    setValue('')
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <form onSubmit={submit} className="todo-form">
          <input className="form-input" value={value} onChange={e => setValue(e.target.value)} />
        </form>
        <div className="button-wrapper">
          <button onClick={ () => setShow("all") }>Show all</button>
          <button onClick={ () => setShow("todo") }>To do</button>
          <button onClick={ () => setShow("completed") }>Finished</button>
        </div>
      </div>
      <div>
      <ul>
        {state.entities.map(todo => {
          if (show === "all") {
            return <ToDoItem key={todo.id} todo={todo} />
          } else if (show === "completed" && todo.completed) {
            return <ToDoItem key={todo.id} todo={todo} />
          } else if (show === "todo" && !todo.completed) {
            return <ToDoItem key={todo.id} todo={todo} />
          } else {
            return null
          }
        })
        }
      </ul>
      </div>
    </div>
  );
}

export default App;
