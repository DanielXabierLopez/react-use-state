function TodoForm({
  text,
  setText,
  addTodo,
  editingId,
}) {
  return (
    <div className="form">
      <input
        type="text"
        value={text}
        placeholder="Escribe una tarea..."
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      {text.trim() && (
        <button onClick={addTodo}>
          {editingId ? "GUARDAR" : "ADD"}
        </button>
      )}
    </div>
  );
}

export default TodoForm;
