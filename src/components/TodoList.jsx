import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import Todo from './Todo'

function TodoList() {

  const { todos } = useContext(TodoContext)

  return (
    <ul className='parentList'>
      {
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </ul>
  )
}

export default TodoList