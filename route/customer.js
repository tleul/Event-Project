const express = require('express');

const router = express.Router();

//Create Customer
router.post('/', (req, res) => {
	res.send(`<h1> Sign Up<h1>`);
});

//Get Customer
router.get('/', (req, res) => {
	console.log('Customer List ');
});

//Delete Customer
router.delete('/', (req, res) => {
	res.send(`<h1> Thank you succesfully Unsubscripe<h1>`);
});

//Update Customer
router.put('/', (req, res) => {
	res.send(`<h1> Thank you succesfully Unsubscripe<h1>`);
});
module.exports = router;
