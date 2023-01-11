const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({ task });

    console.log("posts");
  } catch (error) {
    error;
  }
};

const getTasks = async (req, res) => {
  try {
    console.log("df");
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ msga: error });
  }
};

const getTask = async (req, res) => {
  const taskID = req.params.id;

  const task = await Task.findOne({ _id: taskID });

  res.json({ task });
};

module.exports = { getTasks, createTask, getTask };
