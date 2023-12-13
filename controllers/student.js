const Student = require('../models/Student');
const Course = require('../models/Course');

// get all students
exports.getStudents = async (req, res) => {
	try {
		let query;

		if (req.params.courseId) {
			query = Student.find({ course: req.params.courseId });
		} else {
			query = Student.find().populate({
				path: 'course',
				select: 'name duration',
			});
		}

		const students = await query;

		res.json({
			success: true,
			count: students.length,
			students,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			err: err.message,
		});
	}
};

// get single student
exports.getStudent = async (req, res) => {
	try {
		const student = await Student.findById(req.params.id);

		if (!student) {
			throw new Error('Student not exists');
		}

		res.status(200).json({
			success: true,
			student,
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};

// add new student
exports.createStudents = async (req, res) => {
	try {
		req.body.course = req.params.courseId;

		console.log(req.params.courseId);
		const course = await Course.findById(req.params.courseId);

		if (!course) {
			throw new Error(
				`No course found with this id: ${req.params.courseId}`
			);
		}

		const student = await Student.create(req.body);

		res.status(200).json({
			success: true,
			student,
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};

// update student details
exports.updateStudents = async (req, res) => {
	try {
		const student = await Student.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		);

		if (!student) {
			throw new Error('Student not exists');
		}

		res.status(200).json({
			success: true,
			student,
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};

// delete student
exports.deleteStudents = async (req, res) => {
	try {
		const student = await Student.findByIdAndDelete(req.params.id);

		if (!student) {
			throw new Error('Student not exists');
		}

		res.status(200).json({
			success: true,
			msg: {},
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};
