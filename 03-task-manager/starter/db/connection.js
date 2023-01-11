const moongose = require("mongoose");

const connectDB = async (conn) => {
  await moongose.connect(conn);
  console.log("db connected");
};

connectDB().catch((err) => console.log(err));

module.exports = connectDB;
