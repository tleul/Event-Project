const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		required: true,
	},
});
const User = mongoose.model('User', UserSchema);

function userValidator(user) {
	const schema = Joi.object({
		name: Joi.string().min(5).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(15).required(),
		isAdmin: Joi.boolean().required(),
	});
	return schema.validate(user);
}

function userauth() {
	const token = jwt.sign({ id: this._id }, 'auth_secrete');
	return token;
}

module.exports = { User, userValidator, userauth };
