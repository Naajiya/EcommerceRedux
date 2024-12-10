import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/prodectSlice';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../components/Pagination';




function Home() {

  const {allProducts,loading,error}=useSelector(state=>state.productReducer)

  const [currentPage,setCurrentPage]=useState(1)
  const [cardPerPage,setCardPerPage]=useState(6)

  let endingIndex=currentPage*cardPerPage;
  let startingIndex=endingIndex-cardPerPage;
  // slice
  let currentPost=allProducts.slice(startingIndex,endingIndex)

  

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const dispatch = useDispatch()
  return (
    <>
      <Header insideHome={true} />
      <div className='container' >
        <Row className='d-flex' >

          <Row style={{ marginTop: '95px',marginLeft:'-40px'}} className='d-flex justify-content-between align-items-center'>

            {
              loading ? 
              <Spinner animation="border" variant="primary" />
              :
              
              currentPost?.length>0?
              currentPost.map(crd=>(
                <Col key={crd?.id} sm={12} md={4} lg={3} className=' p-3' style={{width:'16rem'}} >

                <Card className='text-center m-4'  style={{ width: '18rem', color: 'black', backgroundColor: '#FF007F' }}>
                  <Card.Img variant="top" height={'150px'} style={{ height: '250px' }} className='img-fluid' src={crd.images} />
                  <Card.Body>
                    <Card.Title>{crd.title.slice(0,15)}..</Card.Title>
                    <Card.Text>
                     <p> {crd.warrantyInformation}</p>
                     <p>₹{crd.price}</p>
                      
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <div className='border border-dark p-2 '>
                      <Link to={`/${crd?.id}/view`} className='text-decoration-none ' style={{ color: 'white' }}> View More</Link> </div>
                  </Card.Body>
                </Card>
              </Col>
             
              ))
              :
              <div>nothing to</div>

                


              //  allProducts > 0 ?

              // allProducts.map(crd=>(
              //   <Col sm={12} md={4} lg={3}  >

              //   <Card className='text-center' style={{ width: '18rem', color: 'black', backgroundColor: '#FF007F' }}>
              //     <Card.Img variant="top" height={'150px'} style={{ height: '250px' }} className='img-fluid' src="https://media.shopkund.com/pub/media/catalog/product/cache/9b8fb9a78b48ba20857a65111a93b65e/a/c/acw8891_1_grey-pakistani-suit-in-embroidered-organza-sk153541.jpg" />
              //     <Card.Body>
              //       <Card.Title>{crd.title}</Card.Title>
              //       <Card.Text>
              //         lore  ag rgp  a ei
              //       </Card.Text>
              //       {/* <Button variant="primary">Go somewhere</Button> */}
              //       <div className='border border-dark p-2 '><Link to={'/4/view'} className='text-decoration-none ' style={{ color: 'white' }}> View More</Link> </div>
              //     </Card.Body>
              //   </Card>
              // </Col>
              // ))
              // : <p>no cards</p>


            }

           

          </Row>



        </Row>

        {
          currentPost?.length>0 && <Pagination totalProduct={allProducts.length} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        }
      </div>
    </>
  )
}

export default Home