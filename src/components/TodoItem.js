function TodoItem({ todo, deleteTodos, archiveTodos }) {
  return (
    <div className="box-active-todo">
      <div className="card bg-1">
        <h3 className="text-white border-bottom py-1">{todo.title}</h3>
        <div className="card-body">{todo.body}</div>
        <div className="card-footer">
          <button className="btn-delete" onClick={() => deleteTodos(todo.id)}>
            Hapus
          </button>
          <div className="mb-1"></div>
          <button
            className="btn-archive"
            onClick={() => archiveTodos(todo.id, !todo.archived)}
          >
            {todo.archived ? "Pindahkan" : "Arsipkan"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
