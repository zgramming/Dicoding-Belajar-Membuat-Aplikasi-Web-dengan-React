import TodoItem from "./TodoItem";

function ListTodos({ todos, deleteTodos, archiveTodos, isArchived = false }) {
  return (
    <div className="container-active-todo">
      <h1 className="text-white">
        {isArchived ? "Aktifitas Arsip" : "Aktifitas Aktif"}
      </h1>
      {todos.length === 0 ? (
        <center className="text-white text-bold">
          {isArchived
            ? "Aktifitas Arsip Tidak Ditemukan"
            : "Aktifitas Aktif Tidak Ditemukan"}{" "}
        </center>
      ) : (
        <div className="container-active-todo-items">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodos={deleteTodos}
              archiveTodos={archiveTodos}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListTodos;
