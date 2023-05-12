import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import "./Todo.css";

const Todo = ({ text, handleEdit, deleteTodo }) => {
  return (
    <ol>
      <li>{text}</li>
      <div className="btns">
        <AiFillEdit size={28} className="btn" onClick={handleEdit} />
        <AiFillDelete size={28} className="btn" onClick={deleteTodo} />
      </div>
    </ol>
  );
};

export default Todo;
