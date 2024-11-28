import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
      <Header insideHome={true} />
      <div className='container' >
        <Row className='d-flex' >

          <Row style={{marginTop:'80px'}}>

            <Col sm={12} md={4} lg={3}  > 

              <Card className='text-center' style={{ width: '18rem', color:'black',backgroundColor:'#FF007F' }}>
                <Card.Img variant="top" height={'150px'} style={{height:'250px'}} className='img-fluid' src="https://media.shopkund.com/pub/media/catalog/product/cache/9b8fb9a78b48ba20857a65111a93b65e/a/c/acw8891_1_grey-pakistani-suit-in-embroidered-organza-sk153541.jpg" />
                <Card.Body>
                  <Card.Title>Pakistani</Card.Title>   
                  <Card.Text>
                    lore  ag rgp  a ei
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                  <div><Link to={'/4/view'} className='text-decoration-none' style={{color:'white'}}> View More</Link> </div>
                </Card.Body>
              </Card>
            </Col>

          </Row>


        </Row>
      </div>
    </>
  )
}

export default Home