const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');
const { addFood, fetchAllFood, updateFood, deleteFood } = require('../controllers/foodController');


router.route('/food')
    .get([authorize,admin],fetchAllFood)
    .post([authorize,admin],addFood)

router.route('/food/:id')
    .put([authorize,admin],updateFood)
    .delete([authorize,admin],deleteFood)

module.exports = router;