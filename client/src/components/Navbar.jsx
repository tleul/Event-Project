import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../resources/fakeCategoryService';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loaduser } from '../redux/actions/auth';
const Navbar = ({ loaduser, isAuthenticated }) => {
	useEffect(() => {
		loaduser();
	}, []);
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<Link className='navbar-brand' to='/'>
					Navbar LOGO
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<Link className='nav-link' to='/'>
								Events{' '}
								<span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item active'>
							<Link className='nav-link' to='#'>
								Customers{' '}
								<span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item active'>
							<Link className='nav-link' to='/categories'>
								Add Categories{' '}
								<span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item active'>
							<Link className='nav-link' to='/addevent'>
								Create Events{' '}
								<span className='sr-only'>(current)</span>
							</Link>
						</li>
						{!isAuthenticated ? (
							<>
								{' '}
								<li className='nav-item active'>
									<Link className='nav-link' to='/login'>
										Login{' '}
										<span className='sr-only'>
											(current)
										</span>
									</Link>
								</li>
								<li className='nav-item active'>
									<Link className='nav-link' to='/signup'>
										Signup{' '}
										<span className='sr-only'>
											(current)
										</span>
									</Link>
								</li>
							</>
						) : (
							<>
								<li className='nav-item active '>
									<button
										type='button'
										className='btn btn-warning'>
										<span
											role='button'
											tabindex='0'
											className='nav-link '
											onClick={() => console.log('hi')}>
											Logout{' '}
										</span>
									</button>

									<span className='sr-only'>(current)</span>
								</li>{' '}
							</>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};
Navbar.propTypes = {
	user: PropTypes.array,
	loaduser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
});
export default connect(mapStateToProps, { loaduser })(Navbar);
