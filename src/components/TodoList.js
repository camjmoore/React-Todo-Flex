import React from 'react';
import TodoForm from './TodoForm'
import TodoItems from './TodoItems'

const TodoList = props => {
  return(
    <div>
      <TodoItems todoItems2={props.todoItems1}/>
      <TodoForm addTodo2={props.addTodo1} itemName2={props.itemName1} handleChanges2={props.handleChanges1}/>
    </div>
  )
}

export default TodoList;