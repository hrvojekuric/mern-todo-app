import { todoModel } from "../todoModel/todoModel.js";

export const getTodos = async (req, res) => {
  const todos = await todoModel.find();
  try {
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const saveTodo = async (req, res) => {
  const { text } = req.body;
  try {
    await todoModel.create({ text });
    res.status(201).json(text);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    const updatedTodo = await todoModel.findByIdAndUpdate(_id, { text });
    res.status(201).json(updatedTodo);
  } catch (err) {
    res.status(500).json("Something went wrong");
  }
};

export const deleteTodo = async (req, res) => {
  const _id = req.params.id;
  try {
    const deletedTodo = await todoModel.findByIdAndDelete(_id);
    res.status(200).json("Todo deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};
