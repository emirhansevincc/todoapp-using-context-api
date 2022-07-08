import React, { useContext } from 'react'
import { useState } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoForm() {

    const { addTodo } = useContext(TodoContext)

    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(inputValue)
        setInputValue("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Enter a todo...'
            className='todoFormInput'
            onChange={handleChange}
            value={inputValue}
        />
        <div className="buttons">
            <button className="btn add-task" type='submit'>
                Add Todo
            </button>
            <button className="btn clear">
                Clear All
            </button>
        </div>
    </form>
  )
}

export default TodoForm