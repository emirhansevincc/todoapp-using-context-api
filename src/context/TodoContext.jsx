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
            title: "Clean the car",
            completed: false
        },
    ])

  return (
    <TodoContext.Provider value={{todos}}>{children}</TodoContext.Provider>
  )
}

export default TodoContextProvider