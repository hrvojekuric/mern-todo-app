import { useEffect, useState } from "react";
import Todo from "./components/todo/Todo.jsx";
import {
  deleteTodo,
  editTodo,
  getTodos,
  saveTodo,
} from "./handleApi/HandleApi.jsx";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  const handleEdit = (text, _id) => {
    setEditing(true);
    setText(text);
    setId(_id);
  };

  return (
    <div className="app">
      <div className="top">
        <h2>ToDo app</h2>
        <div className="inputBar">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {editing ? (
            <button
              onClick={() =>
                editTodo(setEditing, id, setId, text, setText, setTodos)
              }
            >
              Update
            </button>
          ) : (
            <button onClick={() => saveTodo(setTodos, text, setText)}>
              Add
            </button>
          )}
        </div>
      </div>
      <div className="bottom">
        {todos.map((todo) => (
          <Todo
            key={todo._id}
            text={todo.text}
            handleEdit={() => handleEdit(todo.text, todo._id)}
            deleteTodo={() => deleteTodo(todo._id, setTodos)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
