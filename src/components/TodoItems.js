import React from 'react';

const TodoItems = props => {
  return(
    <div>
      <ul>
      {props.todoItemsB.map((todoObj, index) => (
        <li onClick={props.toggleCompletedB} key={index} id={todoObj.id} >{todoObj.todo}</li>
      ))}
      </ul>
    </div>
  )
}

export default TodoItems;