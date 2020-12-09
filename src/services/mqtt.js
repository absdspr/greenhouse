const mqtt = require('mqtt')
const schema = require('../validators/sensorsDataValidator')
const service = require('../services/sensorsData')
const { type } = require('../validators/sensorsDataValidator')

const brokerUrl = process.env.BROKER_URL
const client = mqtt.connect('mqtt://test.mosquitto.org')


function config() {
    const sensors_data_topic = process.env.DATA_TOPIC
    client.on('connect', () => {
        console.log(`Connected to broker ${brokerUrl}`)
        client.subscribe('test/topic/lolololo', (err, granted) => {
            if (err) {
                console.log('Could not subscribe to topic')
                process.exit(1)
            }
            console.log('Subscribed to topic')
        })
    })
    client.on('message', (topic, message) => {
        const data = JSON.parse(message.toString())
        console.log(typeof data)
        const error = schema.validate(data).error
        if (error) {
            console.log(`Incorrect data format: ${data}`)
        } else {
            service.postSensorsData(data)
        }
    })
}

module.exports = {
    config
}