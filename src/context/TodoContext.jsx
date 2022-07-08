import React, { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import { toast } from 'react-toastify';

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {

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
    if(inputValue === ""){
      return;
    }
    setTodos([...todos, { id: uuidv4(), title: inputValue, completed:false }])
    toast.success("Todo added")
  }

  const clearAll = () => {
    setTodos([])
    toast.error("All todos cleared")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    toast.error("Todo deleted")
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, clearAll, deleteTodo, setTodos }}>{children}</TodoContext.Provider>
  )
}

export default TodoContextProvider