import './App.css';
import { Component } from 'react';
import Counter from 'components/counter/counter';
import Dropdown from 'components/dropDown/drodown';
import ColorPicker from 'components/colorPicker/coloePicker';
import colorPickerOptions from 'components/colorPicker/colorPicker';
import ToDoList from 'components/todoList/todoList';



class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Todo 1", completed: false },
      { id: "id-2", text: "Todo 2", completed: true },
      { id: "id-3", text: "Todo 3", completed: false }
    ]
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  render() {

    const { todos } = this.state;
// const todoLength = todos.filter(todo => todo.completed)
    const todoLength = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)
    return (
      <>
      <Counter initialValue={0} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} todoDone={todoLength} />
         
    </>);
  };
};

// function App() {
//   return (
    // <Counter initialValue={0} />
    //   <Dropdown />
    //   <ColorPicker options={colorPickerOptions} />
    //   <ToDoList />
    // </>
//   );
// };

export default App;
