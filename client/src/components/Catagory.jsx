import React from 'react';
import { getCategories } from '../resources/fakeCategoryService';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Catagory extends React.Component {
	state = {
		catagory: [],
	};
	async componentDidMount() {
		const { data } = await axios.get('http://localhost:8000/api/catagory');

		this.setState({ category: data });
	}
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
						</Link>
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
			</div>
		);
	}
}

export default Catagory;
