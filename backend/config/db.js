const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log("mongodb connecting...");
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log(
      `connection successfull with mongodb: ${connect.connection.host}`
    );
  } catch (error) {
    console.log(`error with msg: ${error.message}`);
  }
};
module.exports = connectDB;
