import React from 'react'

function TodoForm() {
  return (
    <form>
        <input type="text"
            placeholder='Enter a todo...'
            className='todoFormInput'
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