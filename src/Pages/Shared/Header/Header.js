import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();
  
  return (
    <div>
      <>
        <Navbar
          bg="light"
          variant="light"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar bg="light">
              <Container>
                <Navbar.Brand as={Link} to="/home">Renax</Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              { user?.email ?
                <Navbar.Text>
                <img className="rounded-circle" style={{width: "30px", height: "30px"}} src={user.photoURL} alt="user" />
              </Navbar.Text> 
              : <Navbar.Text>
                {}
             </Navbar.Text> 
              }
              {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
