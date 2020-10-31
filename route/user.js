const express = require('express');
const { userValidator } = require('../model/User');
const { User, userauth } = require('../model/User');
const bcrypt = require('bcrypt');
const { json } = require('express');
const router = express.Router();

//Create User -- Sign Up
router.post('/', async (req, res) => {
	const { error } = userValidator(req.body);
	if (error) return res.status(400).json(error.message);
	const { name, email, password, isAdmin } = req.body;
	try {
		//Check is the user Exists
		const checkuser = await User.findOne({ email: email });
		if (checkuser.length > 0)
			return res.status(400).json({ msg: ' User already exist' });
		//Generate Salt
		const salt = await bcrypt.genSalt(10);

		const user = new User({
			name,
			email,
			password,
			isAdmin,
		});
		//Hash The password
		user.password = await bcrypt.hash(password, salt);

		const response = await user.save();

		const token = userauth();

		return res.status(200).header('x-auth-user', token).send();
	} catch (error) {
		res.status(400).json({ msg: 'Internal Server Error ' });
	}
});

//Get User -- Login
router.get('/', async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user)
		return res.status(401).json({ msg: 'Wrong user name or password ' });
	const check = await bcrypt.compare(password, user.password);
	if (!check)
		return res.status(401).json({ msg: 'Wrong user name or password ' });

	const token = userauth();
	return res.status(200).header('x-auth-user', token).json();
});

//Delete User -- Remove
router.delete('/', (req, res) => {
	const token = req.header('x-auth-user');
	if (!token) return res.status(401).json({ msg: 'Not authorized' });
});

//Update User -- Update Some Information
router.put('/', (req, res) => {
	res.send(`<h1> Thank you succesfully Unsubscripe<h1>`);
});
module.exports = router;
