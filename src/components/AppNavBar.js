import { useState, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import UserContext from '../context/UserContext';

export default function AppNavBar() {

	const { user } = useContext(UserContext);

	return(
		<Navbar bg="dark" expand="lg" data-bs-theme="dark">
			<Container fluid>
			    <Navbar.Brand as={Link} to="/">S84 MW</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ms-auto">
				    	<Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
				    	{(user.id !== null)
				    		? 
					        	<>
					        		<Nav.Link as={NavLink} to="/workouts" exact="true">Workouts</Nav.Link>
					        		<Nav.Link as={NavLink} to="/addWorkout" exact="true">Add Workout</Nav.Link>
					        		<Nav.Link as={NavLink} to="/logout" exact="true">Logout</Nav.Link>
					        	</>
							: 
								<>
									<Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
									<Nav.Link as={NavLink} to="/register" exact="true">Register</Nav.Link>
								</>
						}
				    </Nav>
			    </Navbar.Collapse>
			</Container>
		</Navbar>
	);
}