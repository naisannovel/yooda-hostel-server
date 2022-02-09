const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');
const { addStudent, fetchAllStudents, deleteStudent, updateStudent, searchApi } = require('../controllers/studentController');


router.route('/student')
    .get([authorize,admin],fetchAllStudents)
    .post([authorize,admin],addStudent)

router.route('/student/:roll')
    .get([authorize,admin],searchApi)

router.route('/student/:id')
    .put([authorize,admin],updateStudent)
    .delete([authorize,admin],deleteStudent)

module.exports = router;