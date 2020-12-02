const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const config = require('config');
const dbConnection = require('./dbConnection/db');
require('dotenv').config();
PORT = process.env.PORT || 8000;
dbConnection();

// const corsOptions = {
// 	exposedHeaders: 'x-auth-user',
// };

// app.use(cors(corsOptions));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Methods',
		'PUT, POST, GET, DELETE, OPTIONS',
	);
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-auth-user',
	);
	next();
});
app.use(express.json());
app.use(morgan('tiny'));
// app.get('/', (req, res) => {
// 	res.send('hi');
// });

app.use('/api/customer', require('./route/customer'));
app.use('/api/catagory', require('./route/catagory'));
app.use('/api/event', require('./route/event'));
// app.use('/api/user', require('./route/user'));
app.use('/api/admin', require('./route/admin'));
app.use('/api/auth', require('./route/auth'));
if (
	process.env.NODE_ENV === 'production' ||
	process.env.NODE_ENV === 'staging'
) {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
app.listen(PORT, console.log(`Server Connected on Port ${PORT}`));
