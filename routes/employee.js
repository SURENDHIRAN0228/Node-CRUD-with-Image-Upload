const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeControllers')
const upload = require('../middleware/upload')

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', upload.single('avatar'), EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router