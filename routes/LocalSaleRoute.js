const express = require('express')
const router = express.Router()

const { welcome } = require('../middleware/Auth')

const localSaleController = require('../controllers/LocalSaleController')

router.get('/', welcome, localSaleController.getLocalSale)

router.get('/:id', welcome, localSaleController.getLocalSaleById)

router.post('/', welcome, localSaleController.addLocalSale)

router.put('/:id', welcome, localSaleController.editLocalSale)

router.delete('/:id', welcome, localSaleController.removeLocalSale)

module.exports = router