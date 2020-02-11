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


  toggleCompleted = event => {
    event.persist()
    //if you want to update a property on an item in the array you must replace the whole array because the array is state and state is immutable 
    //so you can be sure we'll be spreading in the state of todos:[]
    this.setState( (prevState) => {
      return {
        todos: prevState.todos.map((obj) => {
          if (obj.id === event.target.id){
            return {
              ...obj, completed: !obj.completed
            }
          } else {
            return {
              obj
            }
          }
        })
      }
    })
    console.log(this.state.todos)
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList addTodoA={this.addTodo} 
                  todoItemsA={this.state.todos} 
                  itemNameA={this.state.itemName} 
                  handleChangesA={this.handleChanges}
                  toggleCompletedA={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
