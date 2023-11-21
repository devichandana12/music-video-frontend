import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

    // useNavigate() is a hook
    const navigate=useNavigate()
    const handleNavigate=()=>{
        // ṇavigate to home page

        navigate('/home')
    }
  return (
    
  
        <div>
            <Row className='aligin-items-center'>

                {/* 12 total col and row  to use row and col first import the row and col */}
                <Col></Col>
                <Col lg={6}>
                    <h1>Welcome to videoo.com</h1>
                    <p style={{ textAlign: "justify" }}>where user can use their favourite videos. User can  uploade any youtube video by copy and paste their url . Videoo.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop . It is free try it now!!!!
                    </p>
                    <button onClick={handleNavigate} className='btn btn-primary'>Click here to know more</button>

                </Col>
                <Col lg={4}>
                    <img style={{width:"80%"}} src="https://img.freepik.com/premium-vector/play-music-logo-neon-signs-vector_77399-1138.jpg" alt="" />
                </Col>
                <Col></Col>

            </Row>
        </div>
    )
  
}

export default Landingpage