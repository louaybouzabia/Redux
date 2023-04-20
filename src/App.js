import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './Actions';

function App() {

  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector(state => state.Todo);
  const { todos } = Todo;

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  };
  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }







  return (
    <div className="App">
      <header className='App_header'>
        <h2>Checkpoint Redux</h2>
        <form onSubmit={handelSubmit}>
          <input placeholder='you can enter a Todo'
            onChange={(e) => setTodo(e.target.value)}></input>
          <button type='submit'>Add</button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map((t) => (
              <li key={t.id} className='singleTodo'>
                <span className='todoText'>{t.todo}</span>
                <button onClick={() => removeHandler(t)}>Delete</button>
              </li>
            ))
          }

        </ul>
      </header>
    </div>
  );
}

export default App;