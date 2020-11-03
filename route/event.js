const express = require('express');
const auth = require('../modules/auth');
const admin = require('../modules/admin');
const { Event, validateEvents } = require('../model/Events');
const Catagory = require('../model/Category');
const { response } = require('express');
const router = express.Router();

//Create Event
router.post('/', [auth, admin], async (req, res) => {
	const { error } = validateEvents(req.body);
	if (error) return res.status(400).json(error);
	try {
		const {
			eventName,
			eventDescription,
			eventLocation,
			active,
			adultTicketPrice,
			childTicketPrice,
			catagoryId,
		} = req.body;

		const event = new Event({
			eventName,
			eventDescription,
			eventLocation,
			active,
			adultTicketPrice,
			childTicketPrice,
			eventCatagory: catagoryId,
		});
		const response = event.save();
		response.json(response);
	} catch (error) {
		console.log(error);
	}
});

// //Get Events
router.get('/', auth, async (req, res) => {
	const events = await Event.find().sort('active');

	res.status(200).json(events);
});

//Delete Customer
router.delete('/:id', [auth, admin], async (req, res) => {
	const event = await Event.findByIdAndDelete(req.params.id);
	res.status(200).res.json({ msg: 'Event Deleted', event: event });
});

// //Update Event

router.put('/:id', [auth, admin], async (req, res) => {
	const {
		eventName,
		eventDescription,
		eventLocation,
		active,
		adultTicketPrice,
		childTicketPrice,
		catagoryId,
	} = req.body;
	const event = await Event.findById(req.params.id);

	const updateEvent = {
		eventName: eventName ? eventName : event.eventName,
		eventDescription: eventDescription
			? eventDescription
			: event.eventDescription,
		eventLocation: eventLocation ? eventLocation : event.eventLocation,
		active: active ? active : event.active,
		adultTicketPrice: adultTicketPrice
			? adultTicketPrice
			: event.adultTicketPrice,
		childTicketPrice: childTicketPrice
			? childTicketPrice
			: event.childTicketPrice,
		catagoryId: catagoryId ? catagoryId : event.catagoryId,
	};

	const updatedevent = await Event.findByIdAndUpdate(
		id,
		{
			$set: {
				eventName: updateEvent.eventName,
				eventDescription: updateEvent.eventDescription,
				eventLocation: updateEvent.eventLocation,
				active: updateEvent.active,
				adultTicketPrice: updateEvent.adultTicketPrice,
				childTicketPrice: updateEvent.childTicketPrice,
				catagoryId: updateEvent.catagoryId,
			},
		},
		{ new: true },
	);

	res.status(200).json(updatedevent);
});
module.exports = router;
