const express = require('express')
const router = express.Router()
const controller = require('../controllers/sensorsData')


// GET /sensorsData
//
router.get('/', controller.getSensorsData)


// POST /sensorsData
// временное решение для теста апишки, в будущем будет убранно
router.post('/', controller.postSensorsData)
module.exports = router