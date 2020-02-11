import React from 'react';

const TodoForm = props => {
  return(
    <div>
      <form onSubmit={props.addTodo2}> 
        <input 
          name="itemName"
          type="text"
          onChange={props.handleChanges2}
          placeholder="add a Todo"
        />

        <button type="submit">Add</button>
        <button>Clear Completed</button>

      </form>
    </div>
  )
}

export default TodoForm;