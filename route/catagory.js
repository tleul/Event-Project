const express = require('express');
const auth = require('../modules/auth');
const admin = require('../modules/admin');
const router = express.Router();

//Create Catagory
router.post('/', [auth, admin], (req, res) => {
	res.send(`Catgory Created `);
});

//Get Catagory
router.get('/', [auth, admin], (req, res) => {
	console.log('Catgory List');
});

//Delete Catagory -- Remove
router.delete('/', [auth, admin], (req, res) => {
	res.send(`Catagory Deleted`);
});

//Update Catagory -- Update  Information
router.put('/', (req, res) => {
	res.send(`catagory deleted`);
});
module.exports = router;
