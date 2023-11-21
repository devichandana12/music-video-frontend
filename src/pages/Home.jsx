import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'



function Home() {

  const [serverResponse, setserverResponse] = useState({})

// from add.jsx
  const handleResponse=(res)=>{

    setserverResponse(res)
  }
console.log(serverResponse);





  return (

    <>
      <h1 className='text-info ms-5 mb-5'>All VideoCards</h1>
     <Link to={'/watchhistory'} className='d-flex justify-content-end mb-5' style={{color:"blue" ,textDecoration:"none",fontSize:"25px"}}>Watch History</Link>
      <Row>
        <Col lg={1}>
          <Add handleRes={handleResponse} />
        </Col>
        <Col lg={7}>
          <View serverRes= {serverResponse}/>
        </Col>
        <Col lg={4}>
          <Category  handlecategory={handleResponse}/>
        </Col>
      </Row>



















    </>
  )
}

export default Home