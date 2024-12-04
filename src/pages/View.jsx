import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTowishList } from '../Redux/wishlistSlice'





function View() {

    const [product, setProduct] = useState({})

    // get id from url
    const { id } = useParams()
    console.log(id)

    // created state - useSelector
    const userwishlist = useSelector(state => state.whishlistreducer)
    console.log(userwishlist)
    const dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem("products")) {
            const allProducts = JSON.parse(localStorage.getItem("products"));
            console.log(allProducts)
            setProduct(allProducts.filter(f => f.id == id)[0])
            console.log(product)

        }
    }, [])


    const handlewishlist = () => {
        if (userwishlist?.includes(product)) {

            alert("product already added")

        } else {
            dispatch(addTowishList(product))
        }
    }



    return (
        <>
            <Header />
            <div className='container '>
                <Row>



                    <Row style={{ marginTop: '90px', color: 'white', padding: '10px' }} className='w-100 mb-5 justify-content-start' >
                        {/* align-items-center */}


                        <Col lg={5} md={6} sm={12}>

                            <div className='justify-content-end d-flex'>
                                <img src={product.images}
                                    className='img-fluid text-center' style={{ height: '260px', width: '250px' }} alt="" />
                            </div>

                        </Col>
                        {/*  align-items-start */}
                        <Col lg={7} md={6} sm={12} className=' d-flex justify-content-start'>
                            <div className='h-100 p-4 ' style={{ color: 'white' }}>
                                <p>PID:{product.id}</p>
                                <h3>{product?.title}</h3>
                                <p>Grey Pakistani Suit in Embroidered Organza</p>
                                <h4>{product.price}</h4>
                                <div className='d-flex justify-content-between align-items-center text-center w-75'>

                                    <button onClick={handlewishlist} className='btn btn-outlined btn-success'>Add to wishlist</button>
                                    <button className='btn btn-outlined btn-success'>Add to cart</button>

                                </div>

                            </div>



                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}

export default View