import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminView({ movies }) {
    return(
        <>
            <Row className="my-5 text-center">
                <h1>Admin Dashboard</h1>
                <Col>
                    <Button variant="success" className="ms-1">Add New Movie</Button>
                </Col>
            </Row>
            <Row>
                <Col className="col-12">
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Description</th>
                            <th>Genre</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            (movies.length > 0) ?
                                movies.map(movie => {
                                    return(
                                        <>
                                            <tr>
                                                <td>{movie.title}</td>
                                                <td>{movie.director}</td>
                                                <td>{movie.year}</td>
                                                <td>{movie.description}</td>
                                                <td>{movie.genre}</td>
                                                <td className="text-center">
                                                    <Button variant = "primary" className="me-1" size = "sm">Edit</Button>
                                                    <Button variant = "danger" size = "sm">Delete</Button>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })
                            :
                                null
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
}