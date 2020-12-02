import React from 'react';
import { getCategories } from '../resources/fakeCategoryService';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Catagory extends React.Component {
	state = {
		catagory: [],
	};
	async componentWillMount() {
		const { data } = await axios.get('http://localhost:8000/api/catagory');

		this.setState({ catagory: data });
	}
	render() {
		return (
			<div className='pr-5'>
				<ul className='list-group text-decoration-none'>
					<li className='list-group-item active text-center'>
						Catagory
					</li>
					<li className='list-group-item text-center '>
						<ul>
							<li
								onClick={() =>
									this.props.filterEvent(null, false)
								}
								className='text-dark   text-decoration-none'>
								All Catagory
							</li>
						</ul>
					</li>
					{this.state.catagory.map((cata) => (
						<Link
							onClick={() =>
								this.props.filterEvent(cata._id, true)
							}
							className='text-dark text-decoration-none'>
							<li class='list-group-item text-center'>
								{cata.category_Name}
							</li>
						</Link>
					))}
				</ul>
			</div>
		);
	}
}

export default Catagory;
