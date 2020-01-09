const express = require("express");
const app = express();
const session = require("express-session");
app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

//Database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restful_task_api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
require("./server/config/mongoose.js");

const flash = require("express-flash");
app.use(flash());
var validate = require("mongoose-validator");

app.use(express.static(__dirname + "/client/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");
app.use(express.json());

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000, () => console.log("listening on port 8000"));
