import React, { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid'

export const TodoContext = createContext()

function TodoContextProvider({ children }) {

    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: "Clean the car",
            completed: false
        },
        {
            id: uuidv4(),
            title: "Clean the house",
            completed: false
        },
    ])

    const addTodo = (inputValue) => {
      setTodos([...todos, { id: uuidv4(), title: inputValue, completed:false }])
    }

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>{children}</TodoContext.Provider>
  )
}

export default TodoContextProvider