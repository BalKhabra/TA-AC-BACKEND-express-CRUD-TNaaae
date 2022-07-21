const express = require("express");
const mongoose = require("mongoose");

// database connect
mongoose.connect("mongodb://localhost/user-diary-2", (err) => {
  console.log(err ? err : "connected to database");
});

// express initialization
const app = express();

// middleware

//view engine
app.use(express.urlencoded({ extended: false }));

//route
app.use("/users", require("./routes/users"));

// Error middlewares
app.use((req, res, next) => {
  res.send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

// listener
app.listen(3000, () => {
  console.log("server is listening on port 3k");
});