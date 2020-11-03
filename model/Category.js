const Joi = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CatagorySchema = new Schema({
	categoryName: {
		type: String,
	},
	categoryDesc: {
		type: String,
	},
	active: {
		type: Boolean,
		required: true,
	},
});
const Catagory = mongoose.model('Catagory', CatagorySchema);

const validateCatagory = (catagory) => {
	const schema = Joi.object({
		categoryName: Joi.string().min(3).required(),
		categoryDesc: Joi.string().min(3).required(),
		active: Joi.boolean().required(),
	});
	return schema.validate(catagory);
};

module.exports = { Catagory, validateCatagory };
