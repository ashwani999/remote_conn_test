//
const express = require('express');
const morgan =require('morgan');
const postroutes=require('./routes/post')
// import mongoose
const mongoose = require('mongoose');
var app = express();
app.use(morgan("dev"));
console.log("running");
app.use("/",postroutes);

// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});
//localhost listen port
app.listen(8000);
