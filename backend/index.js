const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const inviteRoutes = require("./routes/inviteRoutes");

const app = express();

require("dotenv").config();

// Middlewares
app.use(express.json());

// Database connection
const conn = process.env.DB_CONN;
module.exports = mongoose
  .connect(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", userRoutes);
app.use("/api", projectRoutes);
app.use("/api", inviteRoutes);
app.get("/", (req, res) => res.send("Hello"));
