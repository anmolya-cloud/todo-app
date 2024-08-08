import React, {useState, useEffect} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');


 useEffect(()=>{
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if(storedTodos){
          setTodos(storedTodos);
        }
 },[]);


 useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
 }, [todos]);

 const addTodo = (text) => {
        const newTodo = {id: Date.now(), text, completed: false};
        setTodos([...todos, newTodo]);
 };
const editTodo = (id)=>{
  const todoToEdit = todos.find(todo=>todo.id===id);
  setEditId(id);
  setEditText(todoToEdit.text);
}
 const updateTodo = (id) => {
  setTodos(todos.map((todo=>todo.id===id ? {...todo,text: editText}: todo)));
  setEditId(null);
  setEditText('');
 };

 const deleteTodo =(id) =>{
  setTodos(todos.filter(todo=>todo.id!== id));
 };

 const toggleComplete =(id)=>{
  setTodos(todos.map(todo=>todo.id===id?{...todo, completed:!todo.complete}:todo));

 };


  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      {editId && (
        <div>
          <input type='text'
                 value={editText}
                 onChange={(e)=>setEditText(e.target.value)}>
          </input>
          <button onClick={()=>{updateTodo(editId)}}>Update</button>
        </div>
      )}
      <TodoList
          todos={todos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          />
     
    </div>
  );
}

export default App;
