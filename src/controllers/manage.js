const service = require('../services/manage')
const schema = require('../validators/manageDeviceValidator')


function manageDeviceState(req, res, next) {
    try {
        const cmd = req.body
        const error = schema.validate(cmd).error
        if (error) {
            const err = new Error(`Invalid request: ${error.message}`)
            err.status = 400
            throw err
        }
        service.manageDeviceState(cmd)
        res.sendStatus(200)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    manageDeviceState
}
