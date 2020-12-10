const client = require('./mqtt')


function manageDeviceState(command) {
    client.publish(command)
}

module.exports = {
    manageDeviceState
}