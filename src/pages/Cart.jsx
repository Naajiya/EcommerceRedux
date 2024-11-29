import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Cart() {
  return (
    <>
      <Header />
      <div>
        <Container>
          <Row>
            <Row style={{ marginTop: '90px' }}>
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
                      <tr>
                        <td>1</td>
                        <td>samsung</td>
                        <td>
                          <img style={{height:'40px', textAlign:'center'}} src="https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-top/a/r/o/11-12-years-ox-top-6-oriex-original-imagzkg3c6xvr4ny.jpeg?q=90&crop=false" alt="" />
                        </td>
                        <td>
  
                          <div className='d-flex'>
                          <Button variant="outline-light" className='text-dark fs-5'>+</Button>
                            <input type="text" className='border border-light text-center bg-light rounded m-1' style={{width:'40px'}} readOnly value={1}/>
                            <Button variant="outline-light " className='text-dark fs-5'>-</Button>
                          </div>
                        </td>
                        <td>2400</td>
                        <td className='text-danger'><i class="fa-solid fa-trash"></i></td>
  
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className='p-2 d-flex justify-content-end '>
                <Button variant="danger" className='m-2'>Delete Cart</Button>
                <Button variant="info"  className='m-2'>Order Now</Button>

                </div>


              </Col >
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