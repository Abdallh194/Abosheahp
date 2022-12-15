import React from "react";
import { Container, Row } from "react-bootstrap";
import About_01 from "./img/About_01.jpg";
import About_02 from "./img/About_02.jpg";

const About = () => {
  return (
    <div className="About">
      <Container>
        <Row>
          <div className="col-md-6 Box_01">
            <img
              src={About_01}
              className="img-fluid AboutImg"
              alt="About Abo Shehap"
            />
            <div className="col-md-12 TextBox">
              <div className="header">About Abo Shehap</div>
              <p className="desc">
                Now Abu Shehab is looking for your convenience, you will simply
                buy anything you want and it will be delivered to your doorstep
                on the same day...!
              </p>
              <div className="more">Learn More</div>
            </div>
          </div>
          <div className="col-md-6 Box_02">
            <div className="head">
              The largest and largest store in the Middle East
            </div>
            <div className="col-md-12 text-center">
              <img
                src={About_02}
                className="img-fluid AboutImg"
                alt="About Abo Shehap"
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
