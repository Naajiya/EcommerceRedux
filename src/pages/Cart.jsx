import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, emptyCart, increamentQuantity, removeCartItem, } from '../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';



function Cart() {
  const cart = useSelector(state => state.cartSliceReducer);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [totalAmount,setTotalAmount]=useState('')
  const [totalLength,setTotalLength]=useState('')


  useEffect(()=>{
    if(cart?.length>0){
      setTotalLength(cart.length)
      setTotalAmount(cart.map(m=>m.totalPrice).reduce((t1,t2)=>t1+t2))
      
    }
  },[cart])

  const handleDecreament=(product)=>{
    if(product.quantity>1){
     dispatch(decrementQuantity(product.id)) 
    }else{
      dispatch(removeCartItem(product.id))
    }
  }


  const checkout=()=>{
    alert("place successful")
    dispatch(emptyCart())
    navigate('/')
  }
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
                                  <Button onClick={()=>dispatch(increamentQuantity(product.id))} variant="outline-light" className='text-dark fs-5'>+</Button>
                                  <input type="text" className='border border-light text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly value={product.quantity} />
                                  <Button onClick={()=>{dispatch(handleDecreament(product))}} variant="outline-light " className='text-dark fs-5'>-</Button>
                                </div>
                              </td>
                              <td>{product.totalPrice}</td>
                              <td className='text-danger'><Button  onClick={()=>dispatch(removeCartItem(product.id))} ><i class="fa-solid fa-trash"></i></Button></td>

                            </tr>
                          ))

                          
                          
                        }

                    </tbody>
                  </Table>
                </div>
                <div className='p-2 d-flex justify-content-end '>
                  <Button onClick={()=>dispatch(emptyCart())} variant="danger" className='m-2'>Delete Cart</Button>
                  <Button variant="info" className='m-2'>Order Now</Button>

                </div>


              </Col >

              :
              <div>empty cart</div>
                    }


              <Col lg={4}>
                <div className='mt-5 d-flex justify-content-around flex-column w-100  border shadow-lg   shadow-dark p-4'>
                  <h6>Total Items :{totalLength} </h6>
                  <h5>Total Amount : {totalAmount}</h5>
                  <Button onClick={checkout}>Chekout</Button>
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