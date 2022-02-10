const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');
const { addFood, fetchAllFood, updateFood, deleteFood, fetchFood } = require('../controllers/foodController');


router.route('/food')
    .get([authorize,admin],fetchFood)
    .post([authorize,admin],addFood)

router.route('/all/food')
    .get([authorize,admin],fetchAllFood)

router.route('/food/:id')
    .put([authorize,admin],updateFood)
    .delete([authorize,admin],deleteFood)

module.exports = router;