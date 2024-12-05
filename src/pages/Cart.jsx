import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../Redux/cartSlice';





function Cart() {
  const cart = useSelector(state => state.cartSliceReducer);
  const dispatch=useDispatch()

  console.log('cart')
  console.log(cart)
  return (
    <>
      <Header />
      <div>
        <Container>
          <Row>
            <Row style={{ marginTop: '90px' }}>


            {
                        cart?.length > 0 ?

              <Col lg={8}>

                <h3>Cart Summary</h3>
                <div className='table-responsive'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>...</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      
                          cart?.map((product,index )=> (
                            <tr key={product.id}>
                              <td>{index}</td>
                              <td>{product.title}</td>
                              <td>
                                <img style={{ height: '40px', textAlign: 'center' }} src={product.images} alt="" />
                              </td>
                              <td>

                                <div className='d-flex'>
                                  <Button variant="outline-light" className='text-dark fs-5'>+</Button>
                                  <input type="text" className='border border-light text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly value={1} />
                                  <Button variant="outline-light " className='text-dark fs-5'>-</Button>
                                </div>
                              </td>
                              <td>{product.price}</td>
                              <td className='text-danger'><Button  onClick={()=>dispatch(removeCartItem(product.id))} ><i class="fa-solid fa-trash"></i></Button></td>

                            </tr>
                          ))

                          
                          
                        }

                    </tbody>
                  </Table>
                </div>
                <div className='p-2 d-flex justify-content-end '>
                  <Button variant="danger" className='m-2'>Delete Cart</Button>
                  <Button variant="info" className='m-2'>Order Now</Button>

                </div>


              </Col >

              :
              <div>empty cart</div>
                    }


              <Col lg={4}>
                <div className='mt-5 d-flex justify-content-around flex-column w-100  border shadow-lg   shadow-dark p-4'>
                  <h6>Total Items : </h6>
                  <h5>Total Amount : </h5>
                  <Button>Chekout</Button>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Cart