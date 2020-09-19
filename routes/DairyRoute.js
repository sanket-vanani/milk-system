const express = require('express')
const router = express.Router();
const { welcome } = require('../middleware/Auth')
const DairyController = require('../controllers/DairyController')

router.post('/', welcome, DairyController.addDairy)

module.exports = router
