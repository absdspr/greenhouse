const SensorsData = require('../schemas/sensorsData')

async function getSensorsData() {
    return await SensorsData.find({})
}
async function postSensorsData(sensorsData) {
    const result = await SensorsData.create(sensorsData)
    return result
}
module.exports = {
    getSensorsData,
    postSensorsData
}