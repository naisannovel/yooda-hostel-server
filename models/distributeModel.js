const { Schema, model } = require('mongoose');

const DistributeSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "student",
        required: true
    },
    status:{
        type: String,
        enum:['served','not served'],
        required: true
    },
    shift:{
        type: String,
        enum:['day','night'],
        required: true
    },
    food:{
        type: Array,
        of: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
},{ timestamps: true })

module.exports.DistributeModel = model('distribute', DistributeSchema);