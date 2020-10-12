const express = require('express')
const router = express.Router()

const { welcome } = require('../middleware/Auth')

const paymentController = require('../controllers/PaymentController')

router.get('/', welcome, paymentController.getPayment)

router.get('/:id', welcome, paymentController.getPaymentById)

router.post('/', welcome, paymentController.addPayment)

router.put('/:id', welcome, paymentController.editPayment)

router.delete('/:id', welcome, paymentController.removePayment)

module.exports = router