const express = require('express')
const router = express.Router()
const sensorsData = require('./sensorsData')
const manage = require('./manage')


router.use('sensorsData/', sensorsData)
router.use('manage/', manage)

module.exports = router