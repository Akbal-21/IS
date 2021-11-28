import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navba = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src="https://i.ibb.co/zx3Vyzw/ESCOM-barra-final.png" alt="escom" border="0" sizes={{ width: 14 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="navbar-brand"
                  exact
                  to="/auth/welcome"
                >
                  Bienvenido
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="navbar-brand"
                  exact
                  to="/auth/about"
                >
                  Sobre nosotros
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    activeClassName="active"
                    exact
                    to="/auth/menu"
                  >
                    Comida
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    activeClassName="active"
                    exact
                    to="/auth/search"
                  >
                    Busqueda
                  </NavLink>
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
                  to="/auth/contact"
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
                to="/auth/login"
              >
                Login
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
