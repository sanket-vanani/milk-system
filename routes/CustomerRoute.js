const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/CustomerController')
const { welcome } = require('../middleware/Auth')

//Get All customer
router.get('/',welcome, CustomerController.getCustomer)

//Register Customer
router.post('/', welcome, CustomerController.addCustomer)

//Get Customer By id for Update
router.get('/:id', welcome, CustomerController.getCustomerById)

//Update customer
router.put('/:id', welcome, CustomerController.updateCustomer)

//Delete Customer
router.delete('/:id', welcome, CustomerController.deleteCustomer)

module.exports = router