const express = require('express');

const router = express.Router();

//Create User -- Sign Up
router.post('/', (req, res) => {
	res.send(`<h1> Sign Up<h1>`);
});

//Get User -- Login
router.get('/', (req, res) => {
	console.log('User Loged in');
});

//Delete User -- Remove
router.delete('/', (req, res) => {
	res.send(`<h1> Thank you succesfully Unsubscripe<h1>`);
});

//Update User -- Update Some Information
router.put('/', (req, res) => {
	res.send(`<h1> Thank you succesfully Unsubscripe<h1>`);
});
module.exports = router;
