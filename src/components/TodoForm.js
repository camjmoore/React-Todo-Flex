import React from 'react';

class TodoForm extends React.component {
  constructor(){
    super()
    this.state = {},
    
  }

  render(){
    return(
      <form>
        <input 
          name="addTodo"
          type="text"
          placeHolder="add a Todo"
        />

        <button onClick={}>Add</button>
        <button>Clear Completed</button>

      </form>
    )
  }
}