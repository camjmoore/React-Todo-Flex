import React from 'react';

const TodoItems = props => {
  return(
    <div>
    {props.todoItems2.map((task, index) => (
      <h3 key={index}>{task.todo}</h3>
    ))}
    </div>
  )
}

export default TodoItems;