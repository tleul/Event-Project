const express = require('express');
const morgan = require('morgan');
const Catagory = require('./module/Category');
const app = express();
const customer = require('./route/customer');
PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan('tiny'));
// app.get('/', (req, res) => {
// 	res.send('hi');
// });
app.use('/api/customer', customer);
app.listen(PORT, console.log(`Server Connected on Port ${PORT}`));
