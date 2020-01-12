const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title has a minimum length of 2 characters"]
    },
    description: {
      type: String,
      default: ""
    },
    completed: {
      type: Boolean,
      default: false
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", TaskSchema);
