import { useState, useEffect, useContext } from 'react';

import UserView from '../components/UserView';
import AdminView from '../components/AdminView';

import UserContext from '../context/UserContext';

export default function Movies() {
	const { user } = useContext(UserContext);

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(`https://movieapp-api-lms1.onrender.com/movies/getMovies`)
		.then(response => response.json())
		.then(data => {
			if(data.movies) {
				setMovies(data.movies)
			} else {
				setMovies([]);
			}
		})
	}, [user]);

	return(
		(user.isAdmin === true) ?
			<AdminView movies={movies} />
		:
			<UserView movies={movies} />
	);
}