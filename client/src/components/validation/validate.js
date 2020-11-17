import Joi from 'joi-browser';
export const validateEventForm = () => {
	const schema = {
		event_Name: Joi.string().required().min(3).max(20).label('Event Name'),
		event_Description: Joi.string()
			.required()
			.min(3)
			.max(20)
			.label('Event Description'),
		event_Location: Joi.string()

			.required()
			.label('Event Location'),
		active: Joi.boolean().required().label('Active'),
		adult_TicketPrice_number: Joi.number()
			.required()
			.positive()
			.label('Adult Ticket Price'),
		child_TicketPrice_number: Joi.number()
			.required()
			.positive()
			.label('Child Ticket Price'),
		event_Catagory: Joi.string()
			.required()

			.label('Event Catagory '),
	};
	// const result = Joi.validate(productInfo, schema, {
	// 	abortEarly: false,
	// });

	// if (!result.error) return null;
	// const errors = {};
	// for (let item of result.error.details) errors[item.path[0]] = item.message;
	// return errors;

	// const { error } = Joi.validate(productInfo, schema);
	// console.log(error);
};
