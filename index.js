const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/EmployeeDB"

const app = express();

const port = process.env.PORT || 4000;
mongoose.connect(url,{
    useNewUrlParser:true
})
const conn = mongoose.connection

conn.on('open',()=>{
    console.log('Connected-------')
})
app.use(express.json());

const empRouter = require('./src/routers/employee')
app.use('',empRouter)
app.listen(port, ()=>{
    console.log(`Employee CRUD API listening for request at ${port}`)
})


// "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },