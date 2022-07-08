import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function Todo({ todo }) {

  const { deleteItem, setTodos, todos } = useContext(TodoContext)

  const onChange = (id) => {
    const allTodos = [...todos]
    const findIndex = allTodos.findIndex(item => item.id === id)
    const item = todos[findIndex]
    item.completed = !item.completed
    setTodos(allTodos)
  }

  return (

    <li className={"list"} key={todo.id}>
      <div>
          <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
          <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      </div>
      <div className='btns'>
          <button className="deleteButton" onClick={deleteItem(todo.id)}>
            X
          </button>
      </div>
    </li>
  )
}

export default Todo