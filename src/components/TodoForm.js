import React from 'react';

const TodoForm = props => {
  return(
    <div>
      <form onSubmit={props.addTodoB}> 
        <input 
          name="itemName"
          type="text"
          value={props.itemNameB}
          onChange={props.handleChangesB}
        />

        <button type="submit">Add</button>
        {/* <button>Clear Completed</button> */}

      </form>
    </div>
  )
}

export default TodoForm;