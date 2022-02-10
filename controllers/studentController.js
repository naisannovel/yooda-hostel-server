const { StudentModel, validate } = require('../models/studentModel');

// create
module.exports.addStudent = async (req,res)=>{

    const { value, error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const student = new StudentModel(value);
    try {
        const result = await student.save();
        res.send(result);
      } catch (err) {
        const error = [];
        for (field in err.errors) {
          error.push(err.errors[field].message);
        }
        res.send(error);
      }
}

// get
module.exports.fetchAllStudents = async (req,res)=>{
  const skip = req.query.skip;
  const limit = req.query.limit;
  const result = await StudentModel.find({}).limit(parseInt(limit)).skip(parseInt(skip));
  res.send(result);
}

// student - search api
module.exports.searchApi = async (req,res)=>{
    const roll = parseInt(req.params.roll);
    const result = await StudentModel.find({ $where: `/^${roll}.*/.test(this.roll)` });
    res.send(result);
}

// delete
module.exports.deleteStudent = async (req,res)=>{
  const id = req.params.id;
  const result = await StudentModel.findByIdAndDelete(id);
  if (!result) return res.status(404).send("not found");
  res.send(`successfully deleted`);
}

// update
module.exports.updateStudent = async (req,res)=>{
  const id = req.params.id;
  const data = req.body;
  const result = await StudentModel.findByIdAndUpdate(id,data,{ new: true });
  return res.status(200).send(result)
}