const express = require('express')
const employee = require('../models/employee')
const router = express.Router()
const EmployeeSchema = require('../models/employee')

// Fetch All employee
router.get('/',async(req,res)=>{
    try{
        const emp = await EmployeeSchema.find()
        res.json(emp)
        console.log('Get Request')
    }catch(err){
        // res.send("Error")
        res.status(400).json({ message: err.message })

    }
    
})

// Fetch Employee by their ID
router.get('/:id',async(req,res)=>{
    try{
        const emp = await EmployeeSchema.findById(req.params.id)
        res.json(emp)
    }catch(err){
        res.status(500).send(err)
    }
    
})

// Create Employee Data
router.post('/', async(req, res)=>{
    await EmployeeSchema.findOne({name:req.body.name}, async function(err, employee){
        if(err) console.log(err);
        if ( employee){
            res.json("This Employee already been saved");
        } else{
    const emp = new EmployeeSchema(
        {
            name:req.body.name,
            gender:req.body.gender,
            salary: req.body.salary,
            DoB: req.body.DoB
        }
    )
    const emp1 = await emp.save()
        res.json(emp1)
    }
  
})
})

// Update Employee Data 
router.patch('/:id',async(req,res)=>{

    try {
        const id = req.params.id;
        const updateEmp = req.body;
        const options = { new: true };

        const result = await EmployeeSchema.findByIdAndUpdate(
            id, updateEmp, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }


   
    
})

// Remove Employee Data by ID
router.delete('/:id',async(req,res)=>{
    try{
        const emp = await EmployeeSchema.findByIdAndDelete(req.params.id)
        res.status(204).send({message:"Employee has been deleted.."})
    }catch(err){
        res.status(500).json({message: err.message})
        console.log("Wrong ID")
    }
    
})
module.exports = router