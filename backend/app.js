const express = require ('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose  = require("mongoose");
const stuffRoutes = require('./routes/stuff');
const userRouter = require('./routes/user');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



mongoose.connect("mongodb://localhost:27017/OpenClassroom",{ useNewUrlParser: true });
app.use(bodyparser.json());
app.use("/api/stuff", stuffRoutes);
app,use("/api/auth", userRouter);


module.exports = app;
