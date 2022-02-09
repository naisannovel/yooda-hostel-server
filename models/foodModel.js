const { Schema, model } = require('mongoose');
const joi = require('joi');

const FoodSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
        trim: true
    },
    price:{
        type: Number,
        min: 1,
        required: true,
    }
},{ timestamps: true })

const validateFood = food =>{
    const schema = joi.object({
        name: joi.string().min(2).max(255).required(),
        price: joi.number().required(),
    })
    return schema.validate(food)
}

module.exports.FoodModel = model('food',FoodSchema);
module.exports.validate = validateFood;