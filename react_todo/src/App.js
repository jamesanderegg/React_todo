import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import uuid from 'uuid';
import './App.css';



class App extends Component{
  state= {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the Trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(
      todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      }
    )})
  }

  //delete TODO
  delTodo =(id) =>{
    this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id !== id
    )]})
  }
  //Add Todo Submit Button
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <Header />
          <h1>App</h1>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}
export default App;
