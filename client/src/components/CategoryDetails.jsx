import React from 'react';
import { filterEvent, getEvents } from '../resources/fakeEventService';
import { getCategories } from '../resources/fakeCategoryService';
import { Link } from 'react-router-dom';
import axios from 'axios';
class CategoriesDetails extends React.Component {
	state = {
		category: '',
	};
	addCategory = async () => {
		const body = {
			categoryName: 'Woow',
			categoryDesc: 'Foot ball',
			active: true,
		};

		const res = await axios.post(
			'http://localhost:8000/api/catagory',
			body,
		);
		const category = [res.data, ...this.state.category];
		this.setState({ category });
	};

	async componentDidMount() {
		const { data } = await axios.get('http://localhost:8000/api/catagory');
		console.log('yes');
		this.setState({ category: data });
	}

	deleteCategory = async (id) => {
		//I used Optimistic
		const category = this.state.category.filter((cat) => cat._id !== id);
		this.setState({ category });
		const res = await axios.delete(
			`http://localhost:8000/api/catagory/${id}`,
		);
	};
	updateCategory = () => {};
	render() {
		console.log(this.state.category);
		return (
			<>
				<table className='table'>
					<thead>
						<th>Title</th>
						<th>
							<button
								onClick={this.addCategory}
								className='btn-success mt-2 btn-sm '>
								Add Category
							</button>
						</th>
					</thead>
					<tbody>
						{/* {this.state.category.map((cat) => (
							<tr key={cat._id}>
								<td>{cat.categoryName}</td>
								<td>
									<button className='btn-primary mt-2 btn-sm '>
										Update
									</button>
								</td>
								<td>
									<button
										onClick={() =>
											this.deleteCategory(cat._id)
										}
										className='btn-danger mt-2 btn-sm '>
										Delete
									</button>
								</td>
							</tr>
						))} */}
					</tbody>
				</table>
			</>
		);
	}
}

export default CategoriesDetails;
