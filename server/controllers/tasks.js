const mongoose = require("mongoose");
const Task = mongoose.model("Task");
// var moment = require("moment");
module.exports = {
  index: function(req, res) {
    Task.find()
      .then(tasks => {
        console.log(tasks);
        res.json({ tasks: tasks });
      })
      .catch(err => res.json(err));
  },

  task_info: function(req, res) {
    console.log("task id: " + req.params.id);
    Task.findOne({ _id: req.params.id })
      .then(task => {
        console.log(task);
        res.json(task);
      })
      .catch(err => res.json(err));
  },

  create: function(req, res) {
    const task = new Task(req.body);
    task
      .save()
      .then(task => res.json(task))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("new_task", err.errors[key].message);
        }
        res.json(err);
      });
  },

  update: function(req, res) {
    console.log("update task id: " + req.params.id);
    req.body.updated_at = Date.now();
    Task.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
      .then(task => res.json(task))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("update_task", err.errors[key].message);
        }
        res.json(err);
      });
  },

  delete: function(req, res) {
    console.log("task id: " + req.params.id);
    Task.remove({ _id: req.params.id })
      .then(() => res.json({ message: "Success" }))
      .catch(err => res.json(err));
  }
};
