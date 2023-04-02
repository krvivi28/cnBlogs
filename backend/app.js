const express = require("express");
const app = express();
app.use(express.json());
// import routes
const blogRoutes = require("./routes/blogRoutes");
const errorHandler = require("./middleware/errorHandler");
app.use("/api/codingninja", blogRoutes);
app.use(errorHandler);
module.exports = app;
