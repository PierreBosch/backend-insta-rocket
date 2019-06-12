const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://pierre:wPXgeXHuyPwYgfpB@cluster0-pq2o7.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(require("./routes"));

app.listen(3333);
