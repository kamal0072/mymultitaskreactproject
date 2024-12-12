import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Row from 'react-bootstrap/Row';
import { 
    NavLink,
} from 'react-router-dom';
function Layout() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link ><NavLink to="/todo" className={({isActive}) =>{
                        return isActive ? 'btn btn-info' : ""
                    }}>Todo Application</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to="/calculator" className={({isActive}) =>{
                        return isActive ? 'btn btn-info' : ""
                    }}>Calculator</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to="/tipcalc" className={({isActive}) =>{
                        return isActive ? 'btn btn-info' : ""
                    }}>Tip Calculator</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to="/about" className={({isActive}) =>{
                        return isActive ? 'btn btn-info' : ""
                    }}>About</NavLink></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default Layout;