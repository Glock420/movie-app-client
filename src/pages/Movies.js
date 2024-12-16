import { useState, useEffect, useContext } from 'react';

import UserView from '../components/UserView';
// import AdminView from '../components/UserView';

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
		<UserView movies={movies} />
	);
}