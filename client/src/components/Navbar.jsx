import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../resources/fakeCategoryService';

const Navbar = () => {
	return (
		<>
			<nav class='navbar navbar-expand-lg navbar-light bg-light'>
				<Link class='navbar-brand' to='/'>
					Navbar LOGO
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>

				<div
					class='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item active'>
							<a class='nav-link' href='#'>
								Events <span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#'>
								Customers <span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#'>
								Orders <span class='sr-only'>(current)</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
