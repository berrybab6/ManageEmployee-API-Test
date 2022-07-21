const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/EmployeeDB"

const app = express();
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
app.listen(9000, ()=>{
    console.log(`Employee CRUD API listening for request at ${3000}`)
})


// "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },