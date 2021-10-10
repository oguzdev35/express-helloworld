const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

const server = app.listen(3000, () => {
  console.log("> Server Listen At 3000");
});
process.on("SIGTERM", function () {
  server.close(function () {
    console.log("Finished all requests");
  });
});
