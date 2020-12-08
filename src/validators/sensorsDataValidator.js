const Joi = require('joi');

const schema = Joi.object({
    temperature: Joi.number()
                        .required(),
    humidityAir: Joi.number()
                        .required(),
    humidityDirt: Joi.number()
                        .required(),
    brightnessLevel: Joi.number()
                        .max(100)
                        .min(0)
                        .required()
})

module.exports = schema