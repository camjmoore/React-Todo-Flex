import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [{todo: 'rthrth', id: Date.now(), completed: false}],
      itemName: ''
    };
    console.log('constructor is running!')
  }

  addTodo = (e) => {
    e.preventDefault();
    const newItem = {
      todo: this.setState.itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todos, newItem]
    })

    console.log('AddTodo Ran')
  }

  handleChanges = e => {
    this.state.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList addTodo1={this.state.addTodo} todoItems1={this.state.todos} itemName1={this.state.itemName} handleChanges1={this.state.handleChanges}
        />
      </div>
    );
  }
}

export default App;
