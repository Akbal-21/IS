import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Nav1 = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            Cafeteria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="navbar-brand"
                  exact
                  to="/welcom"
                >
                  Bienvenido
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="navbar-brand"
                  exact
                  to="/about"
                >
                  Sobre nosotros
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="navbar-brand"
                  exact
                  to="/welcom"
                >
                  Contacto
                </NavLink>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/login"
              >
                Logout
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
