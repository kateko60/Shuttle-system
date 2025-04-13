import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './authContext';

function Navigation() {
  const {isLoggedIn} = useAuth();
  const {logOut} = useAuth();
    const handlelogOut = () =>{
      logOut();
    }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kazi Shuttles</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shuttles" className="nav-link">Shuttles</Link>
          <Link to="/routes" className="nav-link">Routes</Link>
          {!isLoggedIn && (
            <>
              <Link to="/register" className="nav-link">Register</Link>
              <Link to="/login" className="nav-link">Log In</Link>
            </>
          )}
          {isLoggedIn && (
          <>
           <Link to="/" className="nav-link" onClick={handlelogOut}>Log Out</Link>
            </>
          )}
           <Navbar.Collapse className="signedIn-As">
          <Navbar.Text>
            {isLoggedIn && (<>
            Signed in as: <a href="" className='signedIn'>Kateko Tivane</a>
            </>
)}
          </Navbar.Text>v
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
