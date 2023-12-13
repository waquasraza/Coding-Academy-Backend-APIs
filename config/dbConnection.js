const mongoose = require('mongoose');

const databaseConnection = (MONGO_URI, DB_NAME) => {
	mongoose
		.connect(MONGO_URI, { dbName: DB_NAME })
		.then(console.log('Database successfully connected'))
		.catch((e) => console.log(e));
};

module.exports = databaseConnection;
