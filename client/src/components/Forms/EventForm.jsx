import React from 'react';
import CategoryList from '../ controls/Category';
import Input from '../ controls/Input';
import axios from 'axios';
import { getCategories } from '../../resources/fakeCategoryService';
import { namefix, typefix } from '../../services/formServices';
class EventForm extends React.Component {
	state = {
		category: '',
		event: {
			event_Name: '',
			event_Description: '',
			event_Location: '',
			active: '',
			adult_Ticket_Price_number: '',
			child_Ticket_Price_number: '',
		},
		event_category: '',
	};
	onchangehandler = ({ currentTarget: input }) => {
		const { name, value } = input;

		const event = { ...this.state.event };
		event[name] = value;
		this.setState({ event });
	};
	async componentDidMount() {
		const { data } = await axios.get('http://localhost:8000/api/catagory');

		this.setState({ category: data });
	}
	render() {
		return (
			<>
				<div className='border border-primary p-5 w-50 mx-auto '>
					<section className='text-center pb-10'>
						<hr />
						<h3 className='font-bold text-2xl'>Add Event</h3>
						<p className='text-gray-600 pt-2'></p>
						<p className='text-gray-600 pt-2'>
							Please fill the form carefully.
						</p>
						<hr />
					</section>
					<form action=' '>
						{Object.entries(this.state.event).map((name) => (
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
						<CategoryList options={this.state.category} />
						<button className='btn-primary btn'>Save</button>
					</form>
				</div>
			</>
		);
	}
}

export default EventForm;
