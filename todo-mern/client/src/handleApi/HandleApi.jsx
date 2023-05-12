import axios from "axios";

const url = "http://localhost:3000";

const getTodos = async (setTodos) => {
  try {
    await axios.get(url).then(({ data }) => {
      setTodos(data);
    });
  } catch (err) {
    console.error(err);
  }
};

const saveTodo = async (setTodos, text, setText) => {
  try {
    await axios.post(`${url}/save`, { text });
    getTodos(setTodos);
    setText("");
  } catch (err) {
    console.error(err);
  }
};

const editTodo = async (setEditing, id, setId, text, setText, setTodos) => {
  try {
    await axios.put(`${url}/edit`, { _id: id, text });
    setEditing(false);
    setText("");
    setId(null);
    getTodos(setTodos);
  } catch (err) {
    console.error(err);
  }
};

const deleteTodo = async (_id, setTodos) => {
  await axios.delete(`${url}/delete/${_id}`);
  getTodos(setTodos);
};

export { getTodos, saveTodo, editTodo, deleteTodo };
