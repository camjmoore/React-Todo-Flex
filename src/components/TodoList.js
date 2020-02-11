import React from 'react';
import TodoForm from './TodoForm'
import TodoItems from './TodoItems'

const TodoList = props => {
  return(
    <div>
      <TodoItems todoItemsB={props.todoItemsA}/>
      <TodoForm addTodoB={props.addTodoA} itemNameB={props.itemNameA} handleChangesB={props.handleChangesA}/>
    </div>
  )
}

export default TodoList;