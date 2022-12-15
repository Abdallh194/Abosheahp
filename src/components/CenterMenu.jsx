import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CenterMenu = () => {
  return (
    <div className="navbar CenterMenu">
      <Container>
        <div className="div_nu_01 mail">
          <a href="mailto:Abdallhsabry194@gmail.com">
            {" "}
            <i class="bi bi-envelope-fill"> Abdallhsabry194@gmail.com</i>
          </a>
        </div>
        <NavLink to="/" className="logo div_nu_01">
          <span>A</span>
          <p>b</p>
          <span>o</span>
          <p> </p>
          <p>S</p>
          <span>h</span>
          <p>e</p>
          <span>h</span>
          <p>a</p>
          <span>p</span>
        </NavLink>
        <div className="div_nu_01 order">
          <NavLink to="/bill">
            <i class="bi bi-handbag-fill"></i>
          </NavLink>
          <NavLink to="/shop" className="Shop">
            Shop Now
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default CenterMenu;
