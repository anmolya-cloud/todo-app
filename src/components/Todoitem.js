import React from 'react'

const Todoitem = ({todo, editTodo, deleteTodo, toggleComplete}) => {
  return (
    <div className={`todo-item ${todo.completed?'completed':''}`}>
        <span onClick={()=>toggleComplete(todo.id)}>{todo.text}</span>
        <button onClick={()=>editTodo(todo.id)}>Edit</button>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
      
    </div>
  )
}

export default Todoitem;
