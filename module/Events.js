const mongoose = require('mongoose');
const Catagory = require('./Category');
const Caragory = require('./Category');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	EventName: {
		type: String,
		required: true,
	},
	EventDescription: {
		type: String,
		required: true,
	},
	EventLocation: {
		type: String,
		required: true,
	},
	Active: {
		type: Boolean,
		required: true,
	},
	AdultTicketPrice: {
		type: Number,
		required: true,
	},
	ChildTicketPrice: {
		type: Number,
		required: true,
	},
	EventCatagory: {
		type: Catagory,
		required: true,
	},
});
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
