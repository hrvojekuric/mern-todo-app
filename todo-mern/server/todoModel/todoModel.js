import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

export const todoModel = mongoose.model("todos", todoSchema);
