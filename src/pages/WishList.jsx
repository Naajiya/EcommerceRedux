import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { addTowishList, removeFromWishlist } from '../Redux/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';





function WishList() {

  const userwishlist = useSelector(state => state.whishlistreducer)

  const dispatch=useDispatch()

  return (
    <>
      <Header />
      <Container> 
        <Row>
          <Row style={{ marginTop: '90px' , marginLeft:'-100px'}} className='d-flex '>
            {
              userwishlist?.length > 0 ?
              userwishlist.map(wish=>(

                <Col lg={3} md={4} sm={12} className='m-5'>
                <Card className='text-center' style={{ width: '18rem', color: 'white', backgroundColor: '#FF007F' }}>
                  <Card.Img variant="top" height={'150px'} style={{ height: '250px' }} className='img-fluid' src={wish.images} />
                  <Card.Body >
                    <Card.Title>{wish.title}</Card.Title>
                    <div className='d-flex justify-content-center align-items-center text-center'>
                      <div className='w-25 p-2 me-4 border rounded ' style={{ backgroundColor: 'black', color: 'white' }}>
                        <i onClick={()=>dispatch(removeFromWishlist(wish?.id))} class="fa-solid fa-heart-circle-minus fa-1x"></i>
                      </div>
                      <div className='w-25 p-2 ms-2 border rounded' style={{ backgroundColor: 'black', color: 'white' }}>
                        <i  class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>

                  </Card.Body>
                </Card>
              </Col>

              ))
               
                :
                <div className='text-success'>empty cart list</div>

            }

          </Row>
        </Row>
      </Container>
    </>
  )
}

export default WishList