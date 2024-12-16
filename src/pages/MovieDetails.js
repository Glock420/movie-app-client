import { useState, useEffect, useContext } from 'react';
import { Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Navigate, useParams, useNavigate, Link } from 'react-router-dom';

import UserContext from '../context/UserContext';

import { Notyf } from 'notyf';

export default function MovieDetails() {
    const { user } = useContext(UserContext);

    const { movieId } = useParams();

    const navigate = useNavigate();

    const notyf = new Notyf();

    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    useEffect(() => {
        fetch(`https://movieapp-api-lms1.onrender.com/movies/getMovie/${movieId}`)
        .then(response => response.json())
        .then(data => {
            if(data) {
                setTitle(data.title);
                setDirector(data.director);
                setYear(data.year);
                setDescription(data.description);
                setGenre(data.genre);
            } else {
                navigate('/movies');
            }
        });
    }, [movieId]);

    return(
        user.isAdmin ?
            <Navigate to="/movies" />
        :
            <Row className="d-flex justify-content-center mt-5">
                <Col className="col-8">
                    <Card bg="dark" className="text-white">
                        <Card.Header as="h3" className="text-center">{title}</Card.Header>
                        <Card.Body>
                            <Card.Text>Director: {director}</Card.Text>
                            <Card.Text>Year Published: {year}</Card.Text>
                            <Card.Text>Genre: {genre}</Card.Text>
                            <Card.Text>Synopsis: {description}</Card.Text>
                         </Card.Body>
                    </Card>
                </Col>
            </Row>
    );
}