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

// path parameter

function Header({ insideHome }) {
    return (
        <>

        {/* first section */}
            <div className='d-flex'>
                <Navbar className="w-100 p-1 mb-5  d-flex flex-column flex-sm-row text-light text-center align-items-center justify-content-between" style={{ backgroundColor: '#FF007F', zIndex:'10', position:'fixed' }}>
                    <div className='d-flex'>
                        {/* d-none d-md-inline */}
                    <div className='mt-1  ms-2' style={{ color: 'black' }}>
                            <i class="fa-solid fa-truck fa-2x"></i>
                        </div>
                        <Navbar.Brand href="#home" >
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <h5 style={{ color: 'white', fontFamily: 'cursive' }}>fashion Store</h5>
                            </Link></Navbar.Brand>
                       
                        <Navbar.Toggle />
                    </div>
    
    
                    {/* search bar */}
                    <Form inline>
                        <Row>
                            {
                                insideHome &&
                                <Col xs={12} className='d-inline w-100'>
                                    <InputGroup className='h-25 w-100'>
                                        <InputGroup.Text id="inputGroup-sizing-lg"><i class="fa-solid fa-magnifying-glass fa-1x"></i></InputGroup.Text>
                                        <Form.Control
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </InputGroup>
                                </Col>
                            }
                            <Col xs="auto">
    
                            </Col>
                        </Row>
                    </Form>
                    {/* cart and wishlist */}
                    <Row>
                        <div className='d-flex mt-1'>
                            <div className='me-2'>
                                <Link to={'/wishlist'}>
                                    <Button variant="light" className='w-100'>
                                        <div className='d-flex'>
                                            <div><i class="fa-solid fa-star"></i></div>
                                            <span className='d-none d-md-inline'>wishlist</span>
                                            <div className='ms-1'><Badge bg="secondary">0</Badge></div>
                                        </div>
    
                                    </Button>
                                </Link>
                            </div>
    
                            <Link to={'/cart'}>
                                <Button variant="light">
                                    <div className='d-flex'>
                                        <div><i class="fa-solid fa-cart-shopping"></i></div>
                                        <span className='d-none d-md-inline'>cart</span>
                                        <div className='ms-1'> <Badge bg="secondary">0</Badge></div>
                                    </div>
    
                                </Button>
                            </Link>
    
                        </div>
                    </Row>
                </Navbar>
            </div>
        </>
    )
}

export default Header