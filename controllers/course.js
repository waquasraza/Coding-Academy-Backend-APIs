const Course = require('../models/Course');

// get all course
exports.getCourses = async (req, res) => {
	try {
		const courses = await Course.find({});
		res.json({
			success: true,
			count: courses.length,
			courses,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			err: err.message,
		});
	}
};

// get single course
exports.getCourse = async (req, res) => {
	try {
		const course = await Course.findById(req.params.id);

		if (!course) {
			throw new Error('Course not exists');
		}

		res.status(200).json({
			success: true,
			course,
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};

// add new course
exports.createCourse = async (req, res) => {
	try {
		const course = await Course.create(req.body);

		res.status(200).json({
			success: true,
			course,
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};

// update course details
exports.updateCourse = async (req, res) => {
	try {
		const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!course) {
			throw new Error('Course not exists');
		}

		res.status(200).json({
			success: true,
			course,
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};

// delete course
exports.deleteCourse = async (req, res) => {
	try {
		const course = await Course.findByIdAndDelete(req.params.id);

		if (!course) {
			throw new Error('Course not exists');
		}

		res.status(200).json({
			success: true,
			msg: {},
		});
	} catch (err) {
		res.status(500).json({ success: false, err: err.message });
	}
};
