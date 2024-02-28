import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';



function Duplicate() {
    return (
        <Container className='top'>
            <Row>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Fancy Product</Card.Title>
                            <Card.Text>
                                $40.00 - $80.00
                            </Card.Text>
                            <Button variant="primary" >View options</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Special Item</Card.Title>
                            <Card.Text>
                                $20.00-$18.00
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card></Col>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Fancy Product</Card.Title>
                            <Card.Text>
                                $40.00 - $80.00
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card></Col>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Fancy Product</Card.Title>
                            <Card.Text>
                                $40.00 - $80.00
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card></Col>
            </Row>
            <Row className='bottom'>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Fancy Product</Card.Title>
                            <Card.Text>
                                $40.00 - $80.00
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Fancy Product</Card.Title>
                            <Card.Text>
                                $40.00 - $80.00
                            </Card.Text>
                            <Button variant="primary">View options</Button>
                        </Card.Body>
                    </Card></Col>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Fancy Product</Card.Title>
                            <Card.Text>
                                $40.00 - $80.00
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card></Col>
                <Col>
                    <Card className='app' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <Card.Body>
                            <Card.Title>Fancy Product</Card.Title>
                            <Card.Text>
                                $40.00 - $80.00
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card></Col>
            </Row>
        </Container>

    );

}

function Ready() {
    return (
        <> <Duplicate />
            <div className='content' style={{ backgroundColor: "black" }}>
                <p>Copyright © Your Website 2023</p>
            </div>
        </>

    );

}



export default Ready;