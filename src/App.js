import React from 'react';
import TodoList from './components/TodoList';
import './components/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      itemName: ' '
    };
    console.log('constructor is running!')
  }

  addTodo = e => {
    e.preventDefault();
    const newItem = {
      todo: this.state.itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem],
      itemName: ' '
    })
    console.log('Add Todo Ran')
  }

  handleChanges = (event) => {
    this.setState({
      itemName: event.target.value
    });
    console.log(this.state.itemName)
  }


  toggleCompleted = event => {
    // console.log(event.target.id)
    const trackEvent = event.target.id
    const newTodos = this.state.todos.map((obj) => {
      //make sure to match the types - wasn't working before because one value was a string the other was a num
      if (`${obj.id}` === trackEvent){
        console.log('does it get here?')
        return {
          ...obj, completed: !obj.completed
        }
      } else {
        return obj
      }
    })

    this.setState({
      todos: newTodos
    })
  }

  clearCompleted = (e) =>{
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.completed
      })
    })
  }

  render() {
    return (
      <div className="todo-title">
        <h2>Todo List</h2>
        <TodoList addTodoA={this.addTodo} 
                  todoItemsA={this.state.todos} 
                  itemNameA={this.state.itemName} 
                  handleChangesA={this.handleChanges}
                  toggleCompletedA={this.toggleCompleted}
                  clearCompletedA={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
