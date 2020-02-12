import React from 'react';

const TodoItems = props => {
  return(
    <div>
      <ul>
        {props.todoItemsB.map((todoObj, index) => (
          <li 
            className={`item${todoObj.completed ? 'completed' : ''}`}
            onClick={props.toggleCompletedB}
            id={todoObj.id} 
            key={index} 
          >
            {todoObj.todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItems;