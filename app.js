const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");
const router = require("./routes/users.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//home route
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/./views/index.html");
});

//api route
app.use("/api/users", router);

//route error
app.use((req, res, next) => {
  res.status(404).send("404 page not found");
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "somthing broke",
  });
});

module.exports = app;
