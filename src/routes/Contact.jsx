import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="Contact">
      <Container>
        <Row>
          <div className="head">Contact Us</div>
          <Col sm={12} md={6}>
            <Form
              className="contactForm"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
              <textarea
                className="form-control"
                id="msg"
                placeholder="Message"
              />
              <input
                type="submit"
                value="Send Message"
                className="submit"
                onClick={(e) => {
                  e.target.value = "Send ✓";
                }}
              />
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.4180762371047!2d30.929188584902718!3d31.01459957904427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7b3636f286365%3A0x493978db634c94dc!2z2LXYqNix2Yog2KjZhNiq2KfYrNmKINix2K7Ypw!5e0!3m2!1sar!2seg!4v1671113006047!5m2!1sar!2seg"
              title="AboShehap Location"
              allowfullscreen=""
              loading="lazy"
              className="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
