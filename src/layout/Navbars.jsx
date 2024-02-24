import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import icon from '../Assets/logo.png'

function Navbars() {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark" variant="dark">
                <Container fluid>
                <img src={icon} alt="" style={{height:'40px',width:'50px'}}/>
                    <Navbar.Brand href="#" style={{marginLeft:'10px',color:'skyblue'}} ><b><u>STUDENT MANAGEMENT SYSTEM</u></b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >                          
                        </Nav>
                        <Form className="d-flex">
                        <Link className="btn btn-outline-info me-4" to="/">Home</Link>
                            <Link className="btn btn-outline-light me-2" to="/addstudents">Add Student</Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars;