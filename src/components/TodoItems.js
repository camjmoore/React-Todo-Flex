import React from 'react';

const TodoItems = props => {
  return(
    <div>
      <ul>
      {props.todoItems2.map((task, index) => (
        <li key={index}>{task.todo}</li>
      ))}
      </ul>
    </div>
  )
}

export default TodoItems;