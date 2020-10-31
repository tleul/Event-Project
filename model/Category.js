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

module.exports = Catagory;
