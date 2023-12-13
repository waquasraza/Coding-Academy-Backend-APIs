const express = require('express');
const morgan = require('morgan');
require('dotenv').config({ path: './config/.env' });

const app = express();
const PORT = process.env.PORT || 4000;
const dbConnection = require('./config/dbConnection');
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course');

// Database connection
dbConnection(MONGO_URI, DB_NAME);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// api routes
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/courses', courseRoutes);

// listening server
app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
