import React from 'react';

const TodoItems = props => {
  return(
    <div>
      <ul>
      {props.todoItemsB.map((task, index) => (
        <li key={index}>{task.todo}</li>
      ))}
      </ul>
    </div>
  )
}

export default TodoItems;