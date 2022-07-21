const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        gender:{
            type:String,
            require:true,
            maxlength:6
        },
        salary:{
            type:Number,
            require:false
        },
        DoB:{
            type:Date,
            require:true
        }
    })
module.exports = mongoose.model('EmployeeSchema',EmployeeSchema)