import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTodo,
  toggleDone,
  editTodo,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;