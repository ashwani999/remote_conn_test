//
const express = require('express');
const morgan =require('morgan');
const postroutes=require('./routes/post')
var app = express();
app.use(morgan("dev"));
console.log("running");
app.use("/",postroutes);

app.listen(8000);
