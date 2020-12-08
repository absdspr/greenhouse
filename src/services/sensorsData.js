const SesnorsData = require('../schemas/sensorsData')

async function getSensorsData() {
    return await SesnorsData.find({})
}
async function postSensorsData(sensorsData) {
    const result = await SesnorsData.create(sensorsData)
    return result
}
module.exports = {
    getSensorsData,
    postSensorsData
}