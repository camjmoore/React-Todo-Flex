import React from 'react';
import TodoForm from './TodoForm'
import TodoItems from './TodoItems'

const TodoList = props => {
  return(
    <div>
      <TodoItems toggleCompletedB={props.toggleCompletedA} todoItemsB={props.todoItemsA}/>
      <TodoForm  clearCompletedB={props.clearCompletedA} addTodoB={props.addTodoA} itemNameB={props.itemNameA} handleChangesB={props.handleChangesA}/>
    </div>
  )
}

export default TodoList;