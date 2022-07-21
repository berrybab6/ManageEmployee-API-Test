const express = require('express')
const router = express.Router()
const EmployeeSchema = require('../models/employee')

router.get('/',async(req,res)=>{
    try{
        const emp = await EmployeeSchema.find()
        res.json(emp)
        console.log('Get Request')
    }catch(err){
        res.send("Error", err)
    }
    
})


router.get('/:id',async(req,res)=>{
    try{
        const emp = await EmployeeSchema.findById(req.params.id)
        res.json(emp)
        console.log('Get Request')
    }catch(err){
        res.send("Error", err)
    }
    
})

router.post('/', async(req, res)=>{
    const emp = await EmployeeSchema(
        {
            name:req.body.name,
            gender:req.body.gender,
            salary: req.body.salary,
            DoB: req.body.DoB
        }
    )
    try{
       
        const emp1 = await emp.save()
        res.json(emp1)
        console.log('Get Request')
    }catch(err){
        res.send("Error", err)
    } 
})

router.delete('/:id',async(req,res)=>{
    try{
        const emp = await EmployeeSchema.findById(req.params.id)
        res.json(emp)
        console.log('Get Request')
    }catch(err){
        res.send("Error", err)
    }
    
})
module.exports = router