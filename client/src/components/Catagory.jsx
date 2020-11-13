import React from 'react';
import { getCategories } from '../resources/fakeCategoryService';
import { Link } from 'react-router-dom';

class Catagory extends React.Component {
	state = {
		catagory: getCategories(),
	};
	render() {
		return (
			<div className='pr-5'>
				<ul class='list-group'>
					<li class='list-group-item active text-center'>Catagory</li>
					<li class='list-group-item text-center '>
						<Link
							onClick={() => this.props.filterEvent(null, false)}
							className='text-dark text-decoration-none'>
							All Catagory
						</Link>{' '}
					</li>
					{this.state.catagory.map((cata) => (
						<Link
							onClick={() =>
								this.props.filterEvent(cata._id, true)
							}
							className='text-dark text-decoration-none'>
							<li class='list-group-item text-center'>
								{cata.name}
							</li>
						</Link>
					))}
				</ul>
				<button className='mt-5 btn-sm btn-success'>
					Add Catagory
				</button>
			</div>
		);
	}
}

export default Catagory;
