import React, { useState, useCallback } from "react";

// Memoized child to prevent unnecessary re-renders
const TodoItem = React.memo(({ todo, onDelete }) => {
  console.log(`Rendering: ${todo.text}`);
  return (
    <li>
      {todo.text} 
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn useCallback" },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // useCallback ensures this function reference doesn't change on every render
  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: newTodo },
    ]);
    setNewTodo("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
