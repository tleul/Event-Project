import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:8000/api/',
	headers: {
		'Content-Type': 'application/json',
		'x-auth-user': localStorage.getItem('token'),
	},
});
