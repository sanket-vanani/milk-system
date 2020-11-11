const express = require('express')
const router = express.Router()

const { welcome } = require('../middleware/Auth')

const milkCollectionController = require('../controllers/MilkCollectionController')

router.post('/search', welcome, milkCollectionController.getMilkCollection)

router.post('/ledger', welcome, milkCollectionController.getLedger)

router.get('/:id', welcome, milkCollectionController.getMilkCollectionById)

router.post('/', welcome, milkCollectionController.addMilkCollection)

router.put('/:id', welcome, milkCollectionController.editMilkCollection)

router.delete('/:id', welcome, milkCollectionController.removeMilkCollection)

module.exports = router