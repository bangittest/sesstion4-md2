import React, { useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [jobs, setJobs] = useState("");
  let todos = JSON.parse(localStorage.getItem("data")) || [];
// hàm thêm
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Bạn không được để trống");
      return;
    }
    const newdata = {
      id: Math.floor(Math.random() * 10000),
      todo: todo,
    };
    alert("Bạn đã thêm thành công");
    localStorage.setItem("data", JSON.stringify([...todos, newdata]));
    setTodo("");
  };

  //hàm xóa
  const handleDeleteTodo = (todo) => {
    if (window.confirm("Bạn có muốn xóa?")) {
      const updatedTodos = todos.filter((item) => item.id !== todo.id);
      localStorage.setItem("data", JSON.stringify(updatedTodos));
      setJobs(updatedTodos);
    }
  };

  //hàm edit
  const handleEditTodos = (e) => {
    setEditingTodo(e.id);
    setTodo(e.todo);
  };

  const handleSaveTodo = () => {
    if (editingTodo === null) {
      return;
    }

    const updatedTodos = todos.map((item) =>
      item.id === editingTodo ? { ...item, todo: todo } : item
    );

    localStorage.setItem("data", JSON.stringify(updatedTodos));
    setEditingTodo(null);
    setTodo("");
  };

  return (
    <>
      <h4>Thêm công việc</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
      {todos.map((e) => (
        <ul key={e.id}>
          <li>
            {editingTodo === e.id ? (
              <>
                <input
                  type="text"
                  value={todo}
                  onChange={(event) => setTodo(event.target.value)}
                />
                <button onClick={handleSaveTodo}>Lưu</button>
              </>
            ) : (
              <>
                {e.todo}{" "}
                <button onClick={() => handleDeleteTodo(e)}>Xóa</button>
                <button onClick={() => handleEditTodos(e)}>
                  {editingTodo === e.id ? "Lưu" : "Chỉnh sửa"}
                </button>
              </>
            )}
          </li>
        </ul>
      ))}
    </>
  );
}