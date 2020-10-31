const mongoose = require('mongoose');
const config = require('config');
const dbConnection = () => {
	try {
		mongoose.connect(
			process.env.MONGO_DB_URI,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			console.log('Connected'),
		);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = dbConnection;
