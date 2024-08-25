const { response } = require('express')
const Employee = require('../models/Employee')

const index = (req,res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error'
        })
    })
}

const store = ( req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    if(req.file) {
        employee.avatar = req.file.path
    }
    employee.save()
    .then(response => {
        res.json({
            message: "employee added"
        })
    })
    .catch(error => {
        res.json({
            message: ' an error'
        })
    })
}

const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(() => {
        res.json({
           message: 'Updated'
        })
    })
    .catch(error => {
        res.json({
            message: ' an error'
        })
    })

}

const destroy = (req,res,next) => {
    let employeeID= req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        req.json({
            message: 'deleted'
        })
    })
    .catc(error => {
        req.json({
            message: 'an error'
        })
    })
}


module.exports = {
    index, show, store, update, destroy
}

