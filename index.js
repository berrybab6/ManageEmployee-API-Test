const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.listen(3000, ()=>{
    console.log(`Employee CRUD API listening for request at ${3000}`)
})


// "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },