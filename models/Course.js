const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		// enum: ['frontend', 'backend', 'fullstack', 'javascript'],
		required: true,
	},
	fees: {
		type: Number,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	certificate: Boolean,
});

module.exports = mongoose.model('Course', courseSchema);
