import React, { useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const [jobs, setJobs] = useState("");
  let todos = JSON.parse(localStorage.getItem("data")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo==""){
        alert("ban k dc bo trong")
        return
    }
    const newdata = {
      id: Math.floor(Math.random() * 10000),
      todo: todo,
    }
    alert("ban them thanh cong")
    localStorage.setItem("data", JSON.stringify([...todos, newdata]));
    setTodo("");
  };
  const handleDeleteTodo = (todo) => {
    if (confirm("ban co muon xoa")) {
      let todos = JSON.parse(localStorage.getItem("data")) || [];
      todos = todos.filter((item) => item.id !== todo.id);
      setTodo("");
      localStorage.setItem("data", JSON.stringify(todos));
      setJobs(todos);
    }
  };
  return (
    <>
      <h4>Them cong viec</h4>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">button</button>
      </form>
      {todos.map((e) => (
        <ul key={e.id}>
          <li>
            {e.todo} <button onClick={() => handleDeleteTodo(e)}>Delete</button>
          </li>
        </ul>
      ))}
    </>
  );
}
