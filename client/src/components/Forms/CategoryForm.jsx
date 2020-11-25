import React from 'react';
import CategoryList from '../ controls/Category';
import { withRouter } from 'react-router-dom';
import Input from '../ controls/Input';
import axios from 'axios';
import { getCategories } from '../../resources/fakeCategoryService';
import { namefix, typefix } from '../../services/formServices';
import { validateEventForm } from '../../services/validate';
import { errors } from 'joi-browser';
import Radio from '../ controls/Radio';
import { Redirect } from 'react-router-dom';
// categoryName: {
// 		type: String,
// 	},
// 	categoryDesc: {
// 		type: String,
// 	},
// 	active: {
// 		type: Boolean,
// 		required: true,
// 	},

class CategoryForm extends React.Component {
	state = {
		category: {
			category_Name: '',
			category_Description: '',
		},
		radioCheck: true,
		active: true,
	};
	onchangehandler = ({ currentTarget: input }) => {};

	render() {
		return (
			<>
				<div className='border border-primary p-5 w-50 mx-auto  '>
					<section className='text-center pb-10'>
						<hr />
						{this.props.match.params.new ? (
							<h3 className='font-bold text-2xl'>Update Event</h3>
						) : (
							<h3 className='font-bold text-2xl'>Add Category</h3>
						)}
						<p className='text-gray-600 pt-2'></p>
						<p className='text-gray-600 pt-2'>
							Please fill the form carefully.
						</p>
						<hr />
					</section>

					<form action=' ' onSubmit={this.onsubmithandler}>
						{Object.entries(this.state.category).map((name) => (
							<>
								<Input
									onchangehandler={this.onchangehandler}
									key={namefix(name[0])}
									value={name[1]}
									name={name[0]}
									lable={namefix(name[0])}
									type={
										typefix(name[0])
											? typefix(name[0])
											: 'text'
									}
								/>
							</>
						))}
						<Radio
							//error={this.state.errors.active}
							selected={this.state.active}
							onradiocheck={this.onradiocheck}
						/>
						<div className='text-center'>
							<button
								disabled={this.state.disableSubmit}
								type='submit'
								className='btn-primary btn-lg btn text-center'>
								Save
							</button>
						</div>
					</form>
				</div>
			</>
		);
	}
}

export default withRouter(CategoryForm);
