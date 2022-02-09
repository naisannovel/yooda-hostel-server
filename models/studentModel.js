const { Schema, model } = require('mongoose');
const joi = require('joi');

const StudentSchema = new Schema({
    fullName:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
        trim: true
    },
    roll:{
        type: Number,
        min: 1,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    class:{
        type: Number,
        required: true,
    },
    hallName:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        trim: true
    },
    status:{
        type: Boolean
    },
},{ timestamps: true })

const validateStudent = student =>{
    const schema = joi.object({
        fullName: joi.string().min(2).max(255).required(),
        roll: joi.number().required(),
        age: joi.number().required(),
        class: joi.number().required(),
        hallName: joi.string().min(1).max(255).required(),
        status: joi.boolean()
    })
    return schema.validate(student)
}

module.exports.StudentModel = model('student',StudentSchema);
module.exports.validate = validateStudent;