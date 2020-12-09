const express = require('express')
const router = express.Router()
const controller = require('../controllers/sensorsData')


// GET /sensorsData
//
router.get('/', controller.getSensorsData)


module.exports = router