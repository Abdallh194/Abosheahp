import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Navbarr = () => {
  return (
    <Navbar expand="lg" className="MainNavbar">
      <Container>
        <NavLink to="/" className="PageLogo">
          Abo Shehap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavDropdown title="Cart" id="basic-nav-dropdown">
              <NavLink className="menuItem" to="/bill">
                Bill
              </NavLink>
              <NavLink className="menuItem" to="/pay">
                Payment
              </NavLink>

              <NavDropdown.Divider />
              <NavLink to="/report">reporting</NavLink>
            </NavDropdown>
            <NavLink to="/contact">Contact Us</NavLink>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn btn-warning">Search</Button>
          </Form> */}
          <div class="input-group">
            <div class="form-outline">
              <input
                id="search-input form1"
                type="search"
                class="form-control"
                placeholder="Search"
              />
            </div>
            <button id="search-button" type="button" class="btn btn-warning">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
