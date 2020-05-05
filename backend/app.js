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



mongoose.connect("mongodb+srv://master:@$$mon254@cluster0-ncuc7.mongodb.net/test?retryWrites=true&w=majority")
	.then(()=> {
		console.log("successfully connected")
	})
	.catch((error)=>{
		console.log("connection unsuccessful")
		console.error(error);
	})

app.use(bodyparser.json());
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRouter);


module.exports = app;

//