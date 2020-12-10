const mqtt = require('mqtt')
const schema = require('../validators/sensorsDataValidator')
const service = require('../services/sensorsData')

const brokerUrl = process.env.BROKER_URL
const client = mqtt.connect('mqtt://test.mosquitto.org')


function config() {
    client.on('connect', () => {
        console.log(`Connected to broker ${brokerUrl}`)
        client.subscribe('greenhouse/device/data', (err, granted) => {
            if (err) {
                console.log('Could not subscribe to topic')
                process.exit(1)
            }
            console.log('Subscribed to topic')
        })
    })
    client.on('message', (topic, message) => {
        const data = JSON.parse(message.toString())
        const error = schema.validate(data).error
        if (error) {
            console.log(`Incorrect data format: ${data}`)
        } else {
            service.postSensorsData(data)
        }
    })
}

function publish(command) {
    client.publish('greenhouse/device/controll/pannel/', JSON.stringify(command))
}
module.exports = {
    config,
    publish
}