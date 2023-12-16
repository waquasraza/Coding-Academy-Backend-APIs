const express = require('express');
const router = express.Router({ mergeParams: true });
const {
	getStudents,
	createStudents,
	updateStudents,
	deleteStudents,
} = require('../controllers/student');

router.route('/').get(getStudents).post(createStudents);
router
	.route('/:id')
	.get(getStudents)
	.put(updateStudents)
	.delete(deleteStudents);

module.exports = router;
