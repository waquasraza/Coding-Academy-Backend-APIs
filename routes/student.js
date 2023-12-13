const express = require('express');
const router = express.Router({ mergeParams: true });
const {
	getStudents,
	getStudent,
	createStudents,
	updateStudents,
	deleteStudents,
} = require('../controllers/student');

router.route('/').get(getStudents).post(createStudents);
router.route('/:id').get(getStudent).put(updateStudents).delete(deleteStudents);

module.exports = router;
