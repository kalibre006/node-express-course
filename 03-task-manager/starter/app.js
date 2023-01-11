const express = require("express");
const connectDB = require("./db/connection");
require("dotenv").config();

const { tasks } = require("./routers/tasks");

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server listenning");
});

connectDB(process.env.conn);

app.use("/api/v1/tasks", tasks);
