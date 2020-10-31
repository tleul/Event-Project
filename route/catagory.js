const express = require('express');

const router = express.Router();

//Create Catagory
router.post('/', (req, res) => {
	res.send(`Catgory Created `);
});

//Get Catagory
router.get('/', (req, res) => {
	console.log('Catgory List');
});

//Delete Catagory -- Remove
router.delete('/unsubscribe', (req, res) => {
	res.send(`Catagory Deleted`);
});

//Update Catagory -- Update  Information
router.put('/', (req, res) => {
	res.send(`catagory deleted`);
});
module.exports = router;
