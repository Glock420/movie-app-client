import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserView({ movies }) {
    return(
        <>
            <h1 className="my-5">Movies</h1>
            <Row className="d-flex mx-auto my-5 px-5">
                {(movies.length > 0)?
                    movies.map(movie => {
                        return(
                            <Col className="col-3 justify-content-center mt-4">
                                <Card className="h-100">
                                    <Card.Body className="h-100">
                                        <Card.Title className="mb-4 text-center">{movie.title}</Card.Title>
                                    </Card.Body>

                                    <Card.Body className="h-100">
                                        <Card.Text className="mb-3">{movie.director}</Card.Text>
                                        <Link className = "btn btn-primary" to = {`/movies/${movie._id}`} >Details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                :
                    <h1>No Movies Available :(</h1>
                }
            </Row>
        </>
    );
}