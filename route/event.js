const express = require('express');

const router = express.Router();

//Create Event
router.post('/', (req, res) => {
	res.send('Create event');
});

//Get Events
router.get('/', (req, res) => {
	console.log('Get all events');
});

//Delete Customer
router.delete('/', (req, res) => {
	res.send('Event Deleted');
});

//Update Event

router.put('/', (req, res) => {
	res.send('Updated Event');
});
module.exports = router;
