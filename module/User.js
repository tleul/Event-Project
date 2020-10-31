const mongoose = require('mongoose');
const Catagory = require('./Category');
const Caragory = require('./Category');
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
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
