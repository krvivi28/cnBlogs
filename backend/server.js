const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// dotenv config
dotenv.config({ path: "backend/config/config.env" });
// mongodb connect
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on localhost ${process.env.PORT}`);
});
