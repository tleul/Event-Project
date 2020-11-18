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

class EventForm extends React.Component {
	state = {
		category: [],
		event: {
			event_Name: '',
			event_Description: '',
			event_Location: '',
			adult_Ticket_Price_number: '',
			child_Ticket_Price_number: '',
		},
		radioCheck: true,
		active: true,
		event_category: '',
		errors: {},
		disableSubmit: true,
	};
	onchangehandler = ({ currentTarget: input }) => {
		const { name, value } = input;

		const event = { ...this.state.event };
		event[name] = value;
		this.setState({ event });

		const validate = validateEventForm({
			...event,
			event_category: this.state.event_category,
		});
		if (validate) {
			this.setState({ errors: validate });
			this.setState({ disableSubmit: true });
		}
		if (!validate) {
			this.setState({ errors: {} });
			this.setState({ disableSubmit: false });
		}
		console.log(validate);
	};
	onradiocheck = (e) => {
		this.setState({ active: e.target.value === 'true' ? true : false });
	};
	categoryselector = (e) => {
		const category = this.state.category.filter(
			(cat) => cat.categoryName === e.target.value,
		);

		this.setState({ event_category: category[0]._id });
		const validate = validateEventForm({ event_category: e.target.value });

		if (validate.event_category) {
			const errors = this.state.errors;
			errors.event_category = validate.event_category;
			this.setState({ errors });
			this.setState({ disableSubmit: true });
		}
		if (!validate.event_category) {
			const errors = this.state.errors;
			delete errors.event_category;

			this.setState({ errors });
			this.setState({ disableSubmit: false });
		}
	};
	async componentDidMount() {
		const { data } = await axios.get('http://localhost:8000/api/catagory');
		this.setState({ category: data });
	}
	onsubmithandler = async (e) => {
		e.preventDefault();
		const body = {
			...this.state.event,
			event_category: this.state.event_category,
			active: this.state.active,
		};
		try {
			const config = {
				headers: {
					ContentType: 'application/json',
				},
			};
			const response = await axios.post(
				'http://localhost:8000/api/event',
				body,
			);

			if (response.status === 200) {
				this.props.history.push('/');
			}
		} catch (error) {
			if (error.response.status === 400) {
				let errors = this.state.errors;
				let filedname = error.response.data.details[0].path[0];
				errors[filedname] = error.response.data.details[0].message;
				this.setState({ disableSubmit: true });
				this.setState({ errors });
			}
		}
	};
	getEventData = async () => {
		let id = this.props.match.params.id;
		const { data } = await axios.get(
			`http://localhost:8000/api/event/${id}`,
		);
		const {
			event_Name,
			event_Description,
			event_Location,
			adult_Ticket_Price_number,
			child_Ticket_Price_number,
			active,
			event_category,
		} = data;
		const event = {
			event_Name,
			event_Description,
			event_Location,
			adult_Ticket_Price_number,
			child_Ticket_Price_number,
		};

		this.setState({ event, active, event_category });
	};
	componentWillMount() {
		if (this.props.match.params.new) this.getEventData();
	}
	render() {
		return (
			<>
				<div className='border border-primary p-5 w-50 mx-auto  '>
					<section className='text-center pb-10'>
						<hr />
						{this.props.match.params.new ? (
							<h3 className='font-bold text-2xl'>Update Event</h3>
						) : (
							<h3 className='font-bold text-2xl'>Add Event</h3>
						)}
						<p className='text-gray-600 pt-2'></p>
						<p className='text-gray-600 pt-2'>
							Please fill the form carefully.
						</p>
						<hr />
					</section>

					<form action=' ' onSubmit={this.onsubmithandler}>
						{Object.entries(this.state.event).map((name) => (
							<>
								<Input
									error={this.state.errors[name[0]]}
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
							error={this.state.errors.active}
							selected={this.state.active}
							onradiocheck={this.onradiocheck}
						/>
						<CategoryList
							value={this.state.event_category}
							error={this.state.errors.event_category}
							categoryselector={this.categoryselector}
							options={this.state.category}
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

export default withRouter(EventForm);
