import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { toast } from 'react-toastify';

function Todo({ todo }) {

  const { deleteTodo, setTodos, todos } = useContext(TodoContext)

  const onChange = (id) => {
    const allTodos = [...todos]
    const findIndex = allTodos.findIndex(item => item.id === id)
    const item = todos[findIndex]
    item.completed = !item.completed
    setTodos(allTodos)
    toast.success("Completed")
  }

  return (

    <li className={"list"} key={todo.id}>
      <div>
          <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
          <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      </div>
      <div className='btns'>
          <button className="deleteButton" onClick={() => {
            deleteTodo(todo.id)
          }}>
            X
          </button>
      </div>
    </li>
  )
}

export default Todo