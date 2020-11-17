const mongoose = require('mongoose');
const Catagory = require('./Category');

const Schema = mongoose.Schema;
const Joi = require('joi');
const EventSchema = new Schema({
	event_Name: {
		type: String,
		required: true,
	},
	event_Description: {
		type: String,
		required: true,
	},
	event_Location: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		required: true,
	},
	adult_TicketPrice_number: {
		type: Number,
		required: true,
	},
	child_TicketPrice_number: {
		type: Number,
		required: true,
	},
	event_Catagory: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
});
const Event = mongoose.model('Event', EventSchema);
const validateEvents = (event) => {
	const schema = Joi.object({
		event_Name: Joi.string().required().min(3),
		event_Description: Joi.string().required().min(3),
		event_Location: Joi.string().required().min(6),
		active: Joi.boolean().required(),
		adult_TicketPrice_number: Joi.number().required(),
		child_TicketPrice_number: Joi.number().required(),
		catagoryId: Joi.required(),
	});
	return schema.validate(event);
};

module.exports = { Event, validateEvents };
