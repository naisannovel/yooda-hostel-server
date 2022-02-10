const { DistributeModel } = require('../models/distributeModel');



module.exports.distribute = async (req, res) => {

    const { shift, status, student, date } = req.body;

    let doneServed = await DistributeModel.findOne( { shift: shift, status: status, student: student, date: date } );

console.log('doneServed ', doneServed);

    if (doneServed) return res.status(400).send('Already Served');

    const newServedData = new DistributeModel(req.body);

    try{
        const result = await newServedData.save()
        return res.status(201).send("Successfully Served")
    }catch(err){
        return res.status(400).send(err)
    }
}
