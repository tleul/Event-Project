import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catagory from './components/Catagory';
import EventDetails from './components/EventDetails';
import Events from './components/Events';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CategoriesDetails from './components/CategoryDetails';
import EventForm from './components/Forms/EventForm';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
	return (
		<>
			<BrowserRouter>
				{' '}
				<Navbar />
				<div className='container mt-5'>
					{' '}
					<Switch>
						<Route
							path='/events/:id/:title'
							component={EventDetails}
						/>
						<Route
							path='/categories'
							component={CategoriesDetails}
						/>
						<Route
							path='/addevent/:new?/:id?'
							component={EventForm}
						/>
						<Route path='/login' component={Login} />
						<Route path='/signup' component={Signup} />{' '}
						<Route path='/' component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
