import React from 'react';
import Input from '../ controls/Input';
import { namefix, typefix } from '../../services/formServices';
import { Link } from 'react-router-dom';
import { validateUser } from '../../services/validate';
import API from '../../services/api';

class Login extends React.Component {
	state = {
		user: { email: '', password: '' },
		error: {},
		notvalidated: true,
	};
	onchangehandler = ({ currentTarget: input }) => {
		const { name, value } = input;
		const user = { ...this.state.user };
		user[name] = value.toLowerCase();
		this.setState({ user });
		const validate = validateUser(this.state.user);
		if (validate) this.setState({ error: validate, notvalidated: true });
		if (!validate) this.setState({ error: {}, notvalidated: false });
	};
	onsubmithandler = async (e) => {
		e.preventDefault();

		const body = this.state.user;
		const response = await API.post('/admin', body);

		console.log(response);
	};
	onRadiocheck = (e) => {
		this.setState({ admin: !this.state.admin });
	};
	render() {
		console.log(this.state.admin);
		return (
			<div className='border border-primary p-5 w-50 mx-auto  '>
				<section className='text-center pb-10'>
					<hr />

					<h3 className='font-bold text-2xl'>Login </h3>

					<p className='text-gray-600 pt-2'></p>
					<p className='text-gray-600 pt-2'></p>
					<hr />
				</section>

				<form onSubmit={this.onsubmithandler}>
					{Object.entries(this.state.user).map((user) => (
						<>
							<Input
								error={this.state.error[user[0]]}
								onchangehandler={this.onchangehandler}
								// key={namefix(name[0])}
								value={user[1]}
								name={user[0]}
								lable={namefix(user[0])}
								type={
									typefix(user[0]) ? typefix(user[0]) : 'text'
								}
							/>
						</>
					))}

					<div className='text-center pb-3'>
						<button
							disabled={this.state.notvalidated}
							type='submit'
							className='btn-primary btn-lg btn text-center'>
							Login
						</button>
					</div>
					<div>
						<i>
							If you dont have account please
							<span>
								{' '}
								<Link to='signup'>Signup</Link>
							</span>
						</i>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
