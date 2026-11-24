function TodoItem({
  todo,
  deleteTodo,
  toggleDone,
  editTodo,
}) {
  return (
    <div className="todo-item">
      <span
        className={
          todo.isDone ? "done" : ""
        }
      >
        {todo.title}
      </span>

      <div>
        <button
          onClick={() =>
            toggleDone(todo.id)
          }
        >
          ✓
        </button>

        <button
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>

        <button
          onClick={() =>
            deleteTodo(todo.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;