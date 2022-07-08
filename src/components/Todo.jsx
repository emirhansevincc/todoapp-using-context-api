import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function Todo({ todo }) {

  const { deleteItem } = useContext(TodoContext)

  return (

    <li className={"list"} key={todo.id}>
      <div>
          <input type="checkbox" />
          <span>{todo.title}</span>
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