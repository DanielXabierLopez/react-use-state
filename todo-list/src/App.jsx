import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import initialTasks from "./data/tasks.json";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setTodos(initialTasks);
  }, []);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      setText("");
    }, 20000);

    return () => clearTimeout(timer);
  }, [text]);

  const addTodo = () => {
    if (text.trim().length < 6) {
      setError("La tarea debe tener al menos 6 caracteres");
      return;
    }

    if (editingId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId
            ? { ...todo, title: text }
            : todo
        )
      );

      setEditingId(null);
    } else {
      const newTodo = {
        id: uuidv4(),
        title: text,
        isDone: false,
      };

      setTodos([...todos, newTodo]);

      setMessage("✅ Tarea añadida correctamente");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }

    setText("");
    setError("");
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const resetTodos = () => {
    setTodos(initialTasks);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const editTodo = (todo) => {
    setEditingId(todo.id);
    setText(todo.title);
  };

  return (
    <div className="app">
      <h1>TODO SYSTEM v1.0</h1>

      <p className="terminal-msg">
        root@bridge:~$ task_manager.exe
      </p>

      <TodoForm
        text={text}
        setText={setText}
        addTodo={addTodo}
        editingId={editingId}
      />

      {error && (
        <p className="error">
          ❌ {error}
        </p>
      )}

      {message && (
        <p className="success">
          {message}
        </p>
      )}

      <div className="buttons">
        <button onClick={clearTodos}>
          CLEAR ALL
        </button>

        <button onClick={resetTodos}>
          RESET SYSTEM
        </button>
      </div>
      <p className="terminal-msg">
        TASKS LOADED: {todos.length}
      </p>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
