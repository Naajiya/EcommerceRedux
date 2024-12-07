import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { addTowishList, removeFromWishlist } from '../Redux/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addTwoCart } from '../Redux/cartSlice';






function WishList() {

  const userwishlist = useSelector(state => state.whishlistreducer)
  // access cart
  const cart = useSelector(state => state.cartSliceReducer)

  const dispatch = useDispatch()

  const handleCart = (product) => {
    const existingProduct = cart.find(item => item.id == product.id)
    if (existingProduct) {
      alert("product quantity increamented")
      dispatch(addTwoCart(product))
      dispatch(removeFromWishlist(product.id))

    } else {
      dispatch(addTwoCart(product))
      dispatch(removeFromWishlist(product.id))
    }

  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Row style={{ marginTop: '90px', marginLeft: '-20px' }} className='d-flex align-items-center justify-content-center'>
            {
              userwishlist?.length > 0 ?
                userwishlist.map(wish => (

                  <Col lg={3} md={4} sm={12} className='m-5' key={wish?.id}>
                    <Card className='text-center ms-5' style={{ width: '18rem', color: 'white', backgroundColor: '#FF007F' }}>
                      <Card.Img variant="top" height={'150px'} style={{ height: '250px' }} className='img-fluid' src={wish.images} />
                      <Card.Body >
                        <Card.Title>{wish.title}</Card.Title>
                        <div className='d-flex justify-content-center align-items-center text-center'>
                          <div className='w-25 p-2 me-4 border rounded ' style={{ backgroundColor: 'black', color: 'white' }}>
                            <i onClick={() => dispatch(removeFromWishlist(wish?.id))} class="fa-solid fa-heart-circle-minus fa-1x"></i>
                          </div>
                          <div className='w-25 p-2 ms-2 border rounded' style={{ backgroundColor: 'black', color: 'white' }}>
                            <i onClick={()=>handleCart(wish)} class="fa-solid fa-cart-shopping"></i>
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