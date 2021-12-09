import { Component } from 'react';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { todos: [
    { id: 1, title: 'Learn Ruby', desc: 'learn ruby langauge', complete: true, },
    { id: 2, title: 'Learn JS', desc: 'learn js langauge', complete: true, },
    { id: 3, title: 'Learn React', desc: 'learn React technology', complete: false, },
  ] }

  // all of crud action functions will be in a HOC
  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addTodo = (incomingTodo) => {
    const { todos } = this.state 
    // include id because not connected to db
    // const newTodo = { id: this.getUniqId(), title: incomingTodo.title, desc: incomingTodo.desc, complete: incomingTodo.complete  }
    const newTodo = { id: this.getUniqId(), ...incomingTodo  }
    this.setState({ todos: [...todos, newTodo ]})
  }

  render() {
    const { todos } = this.state
    return (
      <>
        <h1>My Todos</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={todos} listName="Coding" />
      </>
    )
  }
}

export default App;
