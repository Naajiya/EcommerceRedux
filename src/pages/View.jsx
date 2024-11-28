import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'



function View() {
    return (
        <>
            <Header />
            <div className='container '>
                <Row>
                    <Row style={{ marginTop: '90px', color:'white',padding:'10px' }} className='w-100 mb-5 justify-content-start' >
                        {/* align-items-center */}
                        <Col lg={6} md={6} sm={12}>

                        <div className='justify-content-end d-flex'>
                            <img src="https://media.shopkund.com/pub/media/catalog/product/cache/9b8fb9a78b48ba20857a65111a93b65e/a/c/acw8891_1_grey-pakistani-suit-in-embroidered-organza-sk153541.jpg" 
                             className='img-fluid text-center' style={{height:'260px', width:'250px'}} alt="" />
                        </div>

                        </Col>
                        {/*  align-items-start */}
                        <Col lg={6} md={6} sm={12} className=' d-flex justify-content-start'>
                        <div className='h-100 p-4 '>
                                    <p>PID:1</p>
                                    <h3>Pkistani Suit</h3>
                                    <p>Grey Pakistani Suit in Embroidered Organza</p>
                                    <h4>₹ 2400</h4>
                              
                          
                        </div>
                        
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}

export default View