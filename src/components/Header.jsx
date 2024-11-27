import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

function Header({ insideHome }) {
    return (
        <>
            <Navbar className=" justify-content-between w-100  position-fixed" style={{ backgroundColor: '#FF007F' }}>
                <div className='d-flex'>
                    <Navbar.Brand href="#home" ><Link to={'/'} style={{ textDecoration: 'none' }}><h4 style={{ color: 'white', marginLeft: '20px' }}>fashion store</h4></Link></Navbar.Brand>
                    <div className='m-2' style={{ color: 'black' }}><i class="fa-solid fa-truck fa-2x"></i></div>
                    <Navbar.Toggle />
                </div>
                <Form inline>
                    <Row>
                        {insideHome && <Col xs="auto">
                            <InputGroup size="lg" className='h-25'>
                                <InputGroup.Text id="inputGroup-sizing-lg">search</InputGroup.Text>
                                <Form.Control
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </InputGroup>
                        </Col>}
                        <Col xs="auto">

                        </Col>
                    </Row>
                </Form>
                <Row>
                    <div className='d-flex'>
                        <div className='me-2'>
                            <Link to={'/wishlist'}>
                                <Button variant="light" className='w-100'>
                                    wishlist <Badge bg="secondary">0</Badge>
                                    <span className="visually-hidden">unread messages</span>
                                </Button>
                            </Link>
                        </div>

                        <Link to={'/cart'}>
                            <Button variant="light">
                                cart <Badge bg="secondary">0</Badge>
                                <span className="visually-hidden">unread messages</span>
                            </Button>
                        </Link>

                    </div>
                </Row>
            </Navbar>
        </>
    )
}

export default Header