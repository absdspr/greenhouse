const mongoose = require('mongoose')

// Схема данных от датчиков в базе данных.
const sensorsDataSchema =  new mongoose.Schema({
    temperature: {
        type: Number,
        required: true
    },
    humidityAir: {
        type: Number,
        required: true
    },
    humidityDirt: {
        type: Number,
        required: true
    },
    brightnessLevel: {
        type: Number,
        max: 100,
        min: 0,
        required: true
    },
}, {
    timestamps: true
})

const SesnorsData = mongoose.model('SensorsData', sensorsDataSchema)

module.exports = SesnorsData