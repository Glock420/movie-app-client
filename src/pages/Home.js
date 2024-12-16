import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UserContext from '../context/UserContext';

export default function Home() {
    const { user } = useContext(UserContext);

	return(
		<Row>
            <Col className="mt-5 mx-auto text-center">
                <h1>S84 Movie World</h1>
                <p>Streaming movies for free since 50 AD</p>
                {(user.id !== null)
                    ?
                        <Link className="btn btn-primary" to={"/movies"}>View Movie Catalog</Link>
                    :
                        <Link className="btn btn-primary" to={"/login"}>Login</Link>

                }
            </Col>
        </Row>
	);
}