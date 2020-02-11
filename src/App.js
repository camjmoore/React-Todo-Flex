import React from 'react';
import TodoList from './components/TodoList';

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

  render() {

    console.log(this.state.itemName)
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList addTodoA={this.addTodo} 
                  todoItemsA={this.state.todos} 
                  itemNameA={this.state.itemName} 
                  handleChangesA={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
