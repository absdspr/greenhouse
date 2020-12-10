const Joi = require('joi')


const schema = Joi.object({
    field: Joi.any()
            .valid(
            "temperature", 
            "humidityAir",
            "humidityDirt",
            "brightnessLevel")
            .required(),
    value: Joi.number()
            .positive()
            .required()
})

module.exports = schema