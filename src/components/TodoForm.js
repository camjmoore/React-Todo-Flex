import React from 'react';

const TodoForm = props => {
  return(
    <form>
      <input 
        name="todo"
        type="text"
        placeholder="add a Todo"

        onChange={props.handleChanges2}
      />

      <button onClick={props.addTodo2}>Add</button>
      <button>Clear Completed</button>

    </form>
  )
}

export default TodoForm;