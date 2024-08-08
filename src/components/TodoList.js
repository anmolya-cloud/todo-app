import React from 'react';
import TodoItem from './Todoitem';

const TodoList = ({ todos, editTodo, deleteTodo, toggleComplete }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                // Ensure you return the TodoItem component
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    editTodo={editTodo} 
                    deleteTodo={deleteTodo} 
                    toggleComplete={toggleComplete} 
                />
            ))}
        </div>
    );
};

export default TodoList;