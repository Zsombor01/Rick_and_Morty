import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Profile } from './pages/Profile.jsx';
import { Home } from './pages/Home.jsx';
import './App.css';
import { characterDetailsLoader } from './data/characterData.jsx';

function App() {
	const router = createBrowserRouter(
		/* the routing for the website */
		createRoutesFromElements(
			<Route path='/'>
				<Route index element={<Home />} />
				<Route
					path='profile/:id'
					element={<Profile />}
					loader={characterDetailsLoader}
				/>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
