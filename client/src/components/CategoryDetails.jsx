import React from 'react';
import { filterEvent, getEvents } from '../resources/fakeEventService';

import { Link } from 'react-router-dom';
import axios from 'axios';
import CategoryForm from './Forms/CategoryForm';
class CategoriesDetails extends React.Component {
	state = {
		category: [],
		toggleCategoryForm: false,
	};
	togglecategory = () => {
		this.setState({ toggleCategoryForm: !this.state.toggleCategoryForm });
	};

	getCategories = async () => {
		const { data } = await axios.get('http://localhost:8000/api/catagory');
		this.setState({ category: data });
	};

	componentWillMount() {
		this.getCategories();
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
				{this.state.toggleCategoryForm && (
					<CategoryForm
						getCategories={this.getCategories}
						togglecategory={this.togglecategory}
					/>
				)}
				<table className='table'>
					<thead>
						<th>Title</th>
						<th>
							{!this.state.toggleCategoryForm && (
								<button
									onClick={this.togglecategory}
									className='btn-success mt-2 btn-sm '>
									Add Category
								</button>
							)}
						</th>
					</thead>
					<tbody>
						{this.state.category.map((cat) => (
							<tr key={cat._id}>
								<td>{cat.category_Name}</td>
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
						))}
					</tbody>
				</table>
			</>
		);
	}
}

export default CategoriesDetails;
