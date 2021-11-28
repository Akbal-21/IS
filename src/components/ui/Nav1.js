import React, { useContext } from "react";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { types } from "../../types/types";
import { AuthContext } from "../auth/AuthContext";
import 'boxicons';

export const Nav1 = () => {
  const {
    user: { name },
    dispatch
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {

    history.replace('/auth/welcome');

    dispatch({
      type: types.logout
    });
  }


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
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    activeClassName="active"
                    exact
                    to="/menu"
                  >
                    Comida
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    activeClassName="active"
                    exact
                    to="/search"
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
                  to="/contact"
                >
                  Contacto
                </NavLink>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              <div className="cart__click">
                <NavLink
                  activeClassName="active"
                  className="navbar-brand"
                  exact
                  to="/cart"
                >
                  <box-icon name='cart' color='#ffffff' >
                  </box-icon>
                </NavLink>
              </div>
            </Navbar.Text>
            <Navbar.Text><span className="nav-item nav-link text-info">{name}</span></Navbar.Text>
            <Navbar.Text>
              <Button className="nav-item nav-link btn" onClick={handleLogout}>
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
