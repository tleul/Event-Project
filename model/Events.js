const mongoose = require('mongoose');
const Catagory = require('./Category');

const Schema = mongoose.Schema;
const Joi = require('joi');
const EventSchema = new Schema({
	eventName: {
		type: String,
		required: true,
	},
	eventDescription: {
		type: String,
		required: true,
	},
	eventLocation: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		required: true,
	},
	adultTicketPrice: {
		type: Number,
		required: true,
	},
	childTicketPrice: {
		type: Number,
		required: true,
	},
	eventCatagory: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
});
const Event = mongoose.model('Event', EventSchema);
const validateEvents = Joi.object({
	eventName: Joi.string().required().min(3),
	eventDescription: Joi.string().required().min(3),
	eventLocation: Joi.string().required().min(6),
	active: Joi.boolean().required(),
	adultTicketPrice: Joi.number().required(),
	childTicketPrice: Joi.number().required(),
});
module.exports = { Event, validateEvents };
