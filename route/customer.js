const express = require('express');

const router = express.Router();

//Create Customer
router.get('/signup', (req, res) => {
	res.send(`<h1> Sign Up<h1>`);
});

//Get Customer

router.get('/', (req, res) => {
	console.log('yes');
});

//Delete Customer
router.get('/unsubscribe', (req, res) => {
	res.send(`<h1> Thank you succesfully Unsubscripe<h1>`);
});

//Update Customer

module.exports = router;
