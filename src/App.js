import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
        <TodoList addTodo1={this.addTodo} 
                  todoItems1={this.state.todos} 
                  itemName1={this.state.itemName} 
                  handleChanges1={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
