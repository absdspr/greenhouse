const express = require('express')
const router = express.Router()
const controller = require('../controllers/manage')


router.post('/', controller.manageDeviceState)

module.exports = router