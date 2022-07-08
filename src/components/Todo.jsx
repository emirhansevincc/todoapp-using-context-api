import React from 'react'

function Todo({ todo }) {

  return (

    <li className={"list"} key={todo.id}>
      <div>
          <input type="checkbox" />
          <span>{todo.title}</span>
      </div>
      <div className='btns'>
          <button className="deleteButton">
            X
          </button>
      </div>
    </li>
  )
}

export default Todo