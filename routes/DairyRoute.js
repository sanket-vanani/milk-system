const express = require('express')
const router = express.Router();
const { welcome } = require('../middleware/Auth')
const DairyController = require('../controllers/DairyController')
const { welcomeAdmin } = require('../middleware/AdminAuth')

router.get('/list', welcomeAdmin, DairyController.getDairy)

//Add Dairy
router.post('/', DairyController.addDairy)

//Get Dairy by Id
router.get('/:id', welcome, DairyController.getDairyById)

//Update dairy
router.put('/:id', welcome, DairyController.updateDairy)

module.exports = router
