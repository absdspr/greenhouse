const service = require('../services/sensorsData')

function getSensorsData(req, res, next) {
    const data = service.getSensorsData()
    res.json(data)
}

module.exports = {
    getSensorsData
}