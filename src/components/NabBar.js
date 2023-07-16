import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import imageLogo from '../images/image-logo.jpg'
function NavBar() {
  return (
<Navbar expand="lg" className="navbar nav navbar-dark  blur-header bg-dark"
 style={{zIndex: '9999' , top: '1px', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'sticky', overflow: "hidden" }}>
      <Container>
        <Fade left={1000} delay={1000}>
        <Link to="/" className="navbar-brand logo">
  Mahmoud
  <span> 
    <Image src={imageLogo} style={{width: "40px", height: '40px', borderRadius: '50%', margin: '0 5px'}} alt='image-logo' /> 
  </span>
</Link>
        </Fade>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
  <Fade top={1000} delay={1000}>
    <Link to="/" className="nav-link active">Home</Link>
    <Link to="/about" className="nav-link">About</Link>
    <Link to="/skills" className="nav-link">Skills</Link>
    <Link to="/services" className="nav-link">Services</Link>
    <Link to="/projects" className="nav-link">Projects</Link>
    <Link to="/contact" className="nav-link">Contact</Link>
  </Fade>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
