const express = require('express')
const router = express.Router();
const { welcome } = require('../middleware/Auth')
const DairyController = require('../controllers/DairyController')

//Add Dairy
router.post('/', welcome, DairyController.addDairy)

//Get Dairy by Id
router.get('/:id', welcome, DairyController.getDairyById)

//Update dairy
router.put('/:id', welcome, DairyController.updateDairy)

module.exports = router
