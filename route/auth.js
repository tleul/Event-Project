const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	const token = req.header('x-auth-token');
	consolel.log(token);
	//Check if not token
	// if (!token) {
	// 	return res.status(401).json({ msg: 'NO token, Authorization denied' });
	// }
	// //verify token

	// try {
	// 	const decoded = jwt.verify(token, config.jwtsecret);
	// 	req.user = decoded.user;
	// 	console.log(req.user);
	// 	next();
	// } catch {
	// 	res.status(401).json({ msg: 'Token is not valid' });
	// }
});

module.exports = router;
