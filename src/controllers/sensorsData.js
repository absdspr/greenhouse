const service = require('../services/sensorsData')
const schema = require('../validators/sensorsDataValidator')


async function getSensorsData(req, res, next) {
    const data = await service.getSensorsData()
    res.json(data)
}

async function postSensorsData(req, res, next) {
    const data = req.body
    const error = schema.validate(data).error
    if (error) {
        next(new Error(`Invalid request: ${error.message}`))
    }
    const result = await service.postSensorsData(data)
    res.status(201).json(result)
}

module.exports = {
    getSensorsData,
    postSensorsData
}