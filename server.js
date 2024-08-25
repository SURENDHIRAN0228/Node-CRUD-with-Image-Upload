const express = require('express');
var mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/employee')


mongoose.connect("mongodb://127.0.0.1:27017/files", {useNewUrlParser: true, useUnifiedTopology: true}, function checkdb(error) {
    if(error) {
        console.log("error");
    }
    else {
        console.log("DB started!");
    }
});

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

app.listen(8000,function check(error) {
    if(error) {
        console.log("error");
    }
    else {
        console.log("started!");
    }
});

app.use('/api/employee', EmployeeRoute)