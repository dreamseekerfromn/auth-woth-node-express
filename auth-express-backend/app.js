const express = require("express");
const cors = require("cors");
const app = express();
const usersController = require("./controllers/usersController");
const passport = require('passport');
const passportConfig = require('./passport');
app.use(cors());
app.use(express.json());

app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("welcome to Authentication with Node and Express");
}
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/', pageRouter);

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;
