const { FoodModel, validate } = require('../models/foodModel');

// create
module.exports.addFood = async (req,res)=>{
    const { value, error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const food = new FoodModel(value);
    try {
        const result = await food.save();
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
module.exports.fetchAllFood = async (req,res)=>{
  const skip = req.query.skip;
  const limit = req.query.limit;
  const result = await FoodModel.find({}).limit(parseInt(limit)).skip(parseInt(skip));
  res.send(result);
}

// delete
module.exports.deleteFood = async (req,res)=>{
  const id = req.params.id;
  console.log(req.params.id);
  const result = await FoodModel.findByIdAndDelete(id);
  if (!result) return res.status(404).send("not found");
  res.send(`successfully deleted`);
}

// update
module.exports.updateFood = async (req,res)=>{
  const id = req.params.id;
  const data = req.body;
  const result = await FoodModel.findByIdAndUpdate(id,data,{ new: true });
  return res.status(200).send(result)
}