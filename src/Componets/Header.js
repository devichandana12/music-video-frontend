import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { UploadCloud } from 'react-feather';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar className="bg-success">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={''}  style={{textDecoration:'none',color:'black'}}>
                            <UploadCloud />
                            <span className='ms-4'>Video Uploading</span>
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>

    )
}

export default Header