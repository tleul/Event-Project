import { Route, Switch } from 'react-router-dom';
import Catagory from './components/Catagory';
import EventDetails from './components/EventDetails';
import Events from './components/Events';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
	return (
		<>
			<Navbar />
			<div className='container mt-5'>
				<div class='d-flex flex-row  bd-highlight mb-3'>
					<Switch>
						<Route
							path='/events/:id/:title'
							component={EventDetails}
						/>
						<Route path='/' component={Home} />
					</Switch>
				</div>
			</div>
		</>
	);
}

export default App;
