const service = require('../services/sensorsData')
const schema = require('../validators/sensorsDataValidator')


async function getSensorsData(req, res, next) {
    const data = await service.getSensorsData()
    res.json(data)
}

async function postSensorsData(req, res, next) {
    try {
        const data = req.body
        const error = schema.validate(data).error
        if (error) {
            const err = new Error(`Invalid request: ${error.message}`)
            err.status = 400
            throw err
        }
        const result = await service.postSensorsData(data)
        res.status(201).json(result)
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    getSensorsData,
    postSensorsData
}