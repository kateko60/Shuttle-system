import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function ShuttleDrop({setGroup}) {
  return (
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Choose a shuttle group"
              menuVariant="light"
            >
              <NavDropdown.Item onClick={() => setGroup('A')}>Shuttle A</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setGroup('B')}>Shuttle B</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setGroup('C')}>Shuttle C</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setGroup('Show All')}>Show All
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
  );
}

export default ShuttleDrop;