const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
// const cors = require('cors');

// const url = "mongodb://localhost:27017/EmployeeDB"

const app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 ,
    methods: "GET, PUT,POST,PATCH,DELETE"// For legacy browser support
}

app.use(cors(corsOptions))

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/EmployeeDB`);

app.use(bodyParser.json());
// app.use(cors({
    // origin: '*'
// }));
const PORT = process.env.PORT || 9000;

// const conn = mongoose.connection

// conn.on('open',()=>{
//     console.log('Connected-------')
// })
app.use(express.json());

const empRouter = require('./src/routers/employee')
app.use('',empRouter)
if (process.env.NODE_ENV === 'production') {
    // app.use(express.static('build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
  
  }

app.listen(PORT, ()=>{
    console.log(`Employee CRUD API listening for request at ${PORT}`)
})

    // "client": "npm run start --prefix client",
    // "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\"",
// 
// "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },