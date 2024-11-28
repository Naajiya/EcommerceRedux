import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
     <div className='container-fluid'>
        <Row className='p-5 justify-content-evenly'>
          <Col sm={12} md={3}>
            <h5>
              <Link to={'/'} style={{ textDecoration: "none" }}>
                <Link to={'/'} style={{ textDecoration: "none" }} className='fw-bolder text-dark'><i className="fa-solid fa-truck-fast"  /> FASHION STORE</Link>
              </Link>
            </h5>
            <p style={{ textAlign: "justify" ,fontSize:'12px', color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolorem mollitia atque,
              deserunt sequi consequatur, eveniet soluta deleniti nesciunt,
              asperiores autem adipisci ipsum! Odio omnis dolorum eum ipsam? Consequatur, tenetur!</p>
          </Col>



          <Col sm={12} md={1} className=''>
            <div className=''>
              <h5>Links</h5>
              <div className='d-flex flex-column' style={{fontSize:'14px'}}>
                <Link to={'/'} style={{ textDecoration: "none",color:'white' }}>Landing</Link>
                <Link to={'/wishlist'} style={{ textDecoration: "none" ,color:'white'}}>wishlist</Link>
                <Link to={'/cart'} style={{ textDecoration: "none",color:'white' }}>Cart</Link>
              </div>
            </div>
          </Col>



          <Col className='d-flex flex-column' sm={12} md={1}>
            <h5>Guides</h5>
            <Link style={{ textDecoration: "none" ,color:'white'}} to={'https://react.dev/'}>React</Link>
            <Link style={{ textDecoration: "none" ,color:'white'}} to={'https://react-bootstrap.netlify.app/'}>React Bootstrap</Link>
            <Link style={{ textDecoration: "none",color:'white' }}></Link>
          </Col>
          <Col className='' sm={12} md={3}>
            <h5>Contact Us</h5>
            <div className='d-flex'>
              <input type="text" className='form-control' />
              <Button variant="primary" className='ms-2'>contact</Button>
            </div>

            <div className='d-flex p-2'>
              <i className="fa-brands fa-twitter fs-5" />
              <i className="fa-brands fa-facebook fs-5 ms-3" />
              <i className="fa-brands fa-instagram fs-5 ms-3" />
              <i className="fa-brands fa-linkedin fs-5 ms-3" />
              <i className="fa-brands fa-github fs-5 ms-3" />
              <i className="fa-solid fa-phone fs-5 ms-3" />
            </div>

          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer