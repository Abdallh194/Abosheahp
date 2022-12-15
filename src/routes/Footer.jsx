import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12} md={3} className="Foot_Card">
            <div className="head">Abo Shehap</div>
            <div className="disc">
              The largest and largest store in the Middle East Now Abu Shehab is
              looking for your convenience, you will simply buy anything you
              want and it will be delivered to your doorstep on the same day...!
            </div>
            <div className="icons">
              <a
                href="https://www.facebook.com/profile.php?id=100007172563893"
                target="_blanck"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/+201091415560" target="_blanck">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://twitter.com/AbdallhSabry9" target="_blanck">
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/abdallhrakha/"
                target="_blanck"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          <Col sm={12} md={3} className="Foot_Card">
            <div className="title">Links</div>

            <div className="details">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/shop">Shop</Link>
              </p>
              <p>
                <Link to="/cart">Cart</Link>
              </p>
              <p>
                <Link to="/contact">Contact</Link>
              </p>
              <p>
                <Link to="/reporting">Reporting</Link>
              </p>
            </div>
          </Col>
          <Col sm={12} md={3} className="Foot_Card">
            <div className="title">Address</div>

            <div className="details">
              <p>
                <i class="bi bi-geo-alt-fill"> AlAtawa , Tanta</i>
              </p>
              <p>
                <a href="tel:+201091415560" target="_blnck">
                  <i class="bi bi-telephone-fill">+201091415560</i>
                </a>
              </p>
              <p>
                <a href="mailto:Abdallhsabry194@gmail.com">
                  {" "}
                  <i class="bi bi-envelope-fill"> Abdallhsabry194@gmail.com</i>
                </a>
              </p>
            </div>
          </Col>

          <Col sm={12} md={3} className="Foot_Card">
            <div className="title">NewsLetter</div>

            <input type="text" placeholder="Email" className="form-control" />
            <Button className="btn-warning d-block">Subscribe</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
