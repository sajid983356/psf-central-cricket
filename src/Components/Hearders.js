import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Headers = () => {
  return (
    <Navbar bg="light" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav" >
        <Nav >
          <LinkContainer to="/cricket-team">
            <Nav.Link>Cricket Team</Nav.Link>
          </LinkContainer>

          {/* <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer> */}

          <LinkContainer to="/join-us">
            <Nav.Link>Join Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Headers;
