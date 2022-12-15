import React from "react";
import { Container } from "react-bootstrap";
const TopMenu = () => {
  return (
    <div className="navbar TopMenu">
      <Container>
        <div className="Rest-Center">
          <i class="bi bi-telephone-inbound-fill callMe"></i>
          <p>Call Us : </p>
          <a href="tel:+201091415560" target="_blnck">
            +201091415560
          </a>
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
          <a href="https://www.instagram.com/abdallhrakha/" target="_blanck">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <div className="Rest-Cente">
          <select>
            <option>English</option>
            <option>Arabic</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <p>Open hour: 8.00 - 18.00</p>
        </div>
      </Container>
    </div>
  );
};
export default TopMenu;
