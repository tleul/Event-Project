import { Route, Switch } from 'react-router-dom';
import Catagory from './components/Catagory';
import EventDetails from './components/EventDetails';
import Events from './components/Events';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CategoriesDetails from './components/CategoryDetails';
import EventForm from './components/Forms/EventForm';
function App() {
	return (
		<>
			<Navbar />
			<div className='container mt-5'>
				<Switch>
					<Route path='/events/:id/:title' component={EventDetails} />
					<Route path='/categories' component={CategoriesDetails} />
					<Route path='/addevent' component={EventForm} />
					<Route path='/' component={Home} />
				</Switch>
			</div>
		</>
	);
}

export default App;
