import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


function WishList() {
  return (
    <>
    <Header/>
    <Container>
      <Row>
       <Row style={{marginTop:'90px'}}>
          <Col lg={3} md={4} sm={12}>
          <Card className='text-center ' style={{ width: '18rem', color:'white', backgroundColor:'#FF007F'}}>
                  <Card.Img variant="top" height={'150px'} style={{height:'250px'}} className='img-fluid' src="https://media.shopkund.com/pub/media/catalog/product/cache/9b8fb9a78b48ba20857a65111a93b65e/a/c/acw8891_1_grey-pakistani-suit-in-embroidered-organza-sk153541.jpg" />
                  <Card.Body >
                    <Card.Title>Pakistani</Card.Title>   
                    <div className='d-flex justify-content-center align-items-center text-center'>
                      <div className='w-25 p-2 me-4 border rounded ' style={{backgroundColor:'black',color:'white'}}>
                      <i class="fa-solid fa-heart-circle-minus fa-1x"></i>
                      </div>
                      <div className='w-25 p-2 ms-2 border rounded' style={{backgroundColor:'black',color:'white'}}>
                      <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>
                    
                  </Card.Body>
                </Card>
          </Col>
       </Row>
      </Row>
    </Container>
    </>
  )
}

export default WishList