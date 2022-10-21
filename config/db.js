const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.dbUrl.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb atlas is connected");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
