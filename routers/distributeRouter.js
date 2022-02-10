const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');
const { distribute } = require('../controllers/distributeController');;


router.route('/serve')
    .post([authorize,admin],distribute)

module.exports = router;