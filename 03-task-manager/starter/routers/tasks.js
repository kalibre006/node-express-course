const express = require("express");

const { getTasks, createTask, getTask } = require("../controllers/tasks");

const tasks = express.Router();

/* tasks.get("/", getTasks); */

tasks.route("/").get(getTasks).post(createTask);
tasks.route("/:id").get(getTask);

module.exports = { tasks };
