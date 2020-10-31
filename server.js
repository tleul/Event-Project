const express = require('express');
const morgan = require('morgan');

const app = express();
const config = require('config');
const dbConnection = require('./dbConnection/db');
require('dotenv').config();
PORT = process.env.PORT || 8000;
dbConnection();
app.use(express.json());
app.use(morgan('tiny'));
// app.get('/', (req, res) => {
// 	res.send('hi');
// });

app.use('/api/customer', require('./route/customer'));
app.use('/api/catagory', require('./route/catagory'));
app.use('/api/event', require('./route/event'));
app.use('/api/user', require('./route/user'));
app.listen(PORT, console.log(`Server Connected on Port ${PORT}`));
