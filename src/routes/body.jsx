import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
const Body = () => {
  let date = new Date().getFullYear();
  return (
    <div className="body">
      <div className="over-lay">
        <Container>
          <div className="head_01">Abo Shehap</div>
          <div className="head_02">New brands {date}</div>
          <Bounce cascade top>
            <div className="head_03">
              You will find everything we need available
            </div>
            <NavLink to="/shop" className="st-shop">
              Start Shop <i class="bi bi-arrow-right-circle-fill"></i>
            </NavLink>
          </Bounce>
        </Container>
      </div>
    </div>
  );
};

export default Body;
