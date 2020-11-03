const express = require('express');
const auth = require('../modules/auth');
const admin = require('../modules/admin');
const { Catagory, validateCatagory } = require('../model/Category');
const router = express.Router();

//Create Catagory
router.post('/', [auth, admin], async (req, res) => {
	const { categoryName, categoryDesc, active } = req.body;
	const { error } = validateCatagory(req.body);
	const catagory = await Catagory.findOne({ categoryName });

	try {
		if (error || catagory)
			return res.status(400).json({
				msg: error ? error : 'The catagory name is already Exist',
			});

		const newcatagory = new Catagory({
			categoryName,
			categoryDesc,
			active,
		});

		const response = await newcatagory.save();
		return res.status(200).json(response);
	} catch (error) {
		console.log(error);
	}
});

//Get Catagory
router.get('/', async (req, res) => {
	const catagory = await Catagory.find();
	return res.status(200).json(catagory);
});

//Delete Catagory -- Remove
router.delete('/:id', [auth, admin], async (req, res) => {
	const catagory = await Catagory.findByIdAndDelete(req.params.id);

	return res.status(200).json(catagory);
});

//Update Catagory -- Update  Information
router.put('/', [auth, admin], async (req, res) => {
	try {
		const { categoryName, categoryDesc, active } = req.body;

		const catagory = await Catagory.findByIdAndUpdate(
			req.params.id,
			{
				$set: {
					categoryName,
					categoryDesc,
					active,
				},
			},
			{ new: true },
		);

		return res.status(200).json(catagory);
	} catch (error) {
		console.log(errror);
	}
});
module.exports = router;
