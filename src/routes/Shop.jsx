import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row, Form } from "react-bootstrap";
import Featured_01 from "./img/Featured_01.png";
import Featured_02 from "./img/Featured_02.png";
import Featured_03 from "./img/Featured_03.png";
import Featured_04 from "./img/Featured_04.png";
import offer from "./img/offer.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/ProductsSlice";
import Footer from "./Footer";
const Shop = () => {
  const [MostSale, setMostSale] = useState([]);
  const [Products, setProducts] = useState([]);
  const [FilterdProducts, setFilterdProducts] = useState("");
  const [FilterWorkOn, setFilterWorkOn] = useState(null);
  useEffect(() => {
    axios.get("api/data.json").then((res) => setMostSale(res.data.Most_Sate));
  }, []);
  useEffect(() => {
    axios.get("api/data.json").then((res) => setProducts(res.data.AllProducts));
  }, []);
  let HandleCarigories = (e) => {
    let ProductClone = Products.filter((p) => p.categories === e.target.value);
    setFilterdProducts(ProductClone);
    setFilterWorkOn(true);
    if (e.target.value === "All") {
      setFilterdProducts(Products);
    }
  };
  let dispatch = useDispatch();
  let cartItems = useSelector((state) => state.Weather.cartItems);
  return (
    <div className="Shop">
      <Container>
        <Row>
          <Col xs={12} md={6} className="featured Left_Featuered">
            <div className="">
              <h4>Black Friday Sales</h4>
              <div className="upto">UP TO</div>
              <div className="discount">55% OFF</div>
              <Link to="/shop" className="shop">
                Shop Now
              </Link>
            </div>
            <div className="">
              <img src={Featured_01} className="img-fluid " alt="featured" />
            </div>
          </Col>
          <Col xs={12} md={6} className="featured BOX_Right">
            <div className="Right_Featuered d-flex">
              <div className="col-md-7 Right_Featuered_Text ">
                <div className="header">Men's accessories</div>
                <div className="descripton">
                  All men's accessories are available with us and special offers
                  now
                </div>
                <Link to="/shop" className="shop Right_Btn">
                  Shop Now
                </Link>
              </div>
              <img
                src={Featured_02}
                className="img-fluid col-md-5"
                alt="featured"
              />
            </div>
            <div className="d-flex">
              <Col xs={6} md={6} className="Bottom_Left_Box featured">
                <img src={Featured_03} className="img-fluid" alt="featured" />
                <h4>Women's accessory</h4>
              </Col>
              <Col xs={6} md={6} className="Bottom_Right_Box featured">
                <img src={Featured_04} className="img-fluid" alt="featured" />
                <h4>clothes and fashion</h4>
              </Col>
            </div>
          </Col>
        </Row>
        <Row className="icons">
          <div className="col-md-3 icon_01">
            <i className="bi bi-bag-check-fill"></i>
          </div>
          <div className="col-md-3 icon_02">
            <i className="bi bi-controller"></i>
          </div>
          <div className="col-md-3 icon_01">
            <i className="bi bi-credit-card-fill"></i>
          </div>
          <div className="col-md-3 icon_02">
            <i class="bi bi-router-fill"></i>
          </div>
        </Row>
        <div className="head">
          <div className="header">Most Sales</div>
          <div className="Line"></div>
        </div>
        <Row>
          {MostSale.map((el) => {
            return (
              <div
                key={el.id}
                className="col-md-4 MostCard"
                data-discount={el.discount}
              >
                <img src={el.img} className="img-fluid" alt={el.title} />
                <div className="title">{el.title}</div>
                <div className="price">{el.price}</div>
                <div className="buy">
                  View Offer <i class="bi bi-arrow-right"></i>
                </div>
              </div>
            );
          })}
        </Row>
        <div className="offer d-flex">
          <div className="img_Box">
            <img src={offer} alt={offer} className="img-fluid" />
          </div>
          <div className="txt_Box">
            <div className="title">New restaurant</div>
            <div className="disc">
              We are pleased to inform you that we have opened a new branch for
              food called Karshi
            </div>
            <div className="more">Read More</div>
          </div>
        </div>
        <div className="head">
          <div className="header">Featured</div>
          <div className="Line"></div>
        </div>
        <Form.Select
          aria-label="Default select example"
          className="options"
          onChange={HandleCarigories}
        >
          <option value="All">All Products</option>
          <option value="Sports">Sports</option>
          <option value="Mobile">Mobile</option>
          <option value="Fashion and Accessories">
            Fashion and Accessories
          </option>
          <option value="electric machines">electric machines</option>
          <option value="Home Furniture">Home Furniture</option>
        </Form.Select>
        <Row>
          {FilterWorkOn
            ? FilterdProducts.map((el) => {
                return (
                  <Col
                    className="products"
                    sm={6}
                    md={3}
                    key={el.id}
                    data-discount={el.discount}
                  >
                    <img src={el.images} className="img-fluid" alt={el.title} />
                    <div className="title">{el.title}</div>
                    <div className="price">{el.price}$</div>
                    <div
                      className="buy"
                      onClick={(e) => {
                        dispatch(AddToCart(el));
                        e.target.innerText = " ✓ selected";
                        e.target.parentElement.classList.add("SelectedCart");
                      }}
                    >
                      Add To Cart <i class="bi bi-arrow-right"></i>
                    </div>
                  </Col>
                );
              })
            : Products.map((el) => {
                return (
                  <Col
                    className="products"
                    sm={6}
                    md={3}
                    key={el.id}
                    data-discount={el.discount}
                  >
                    <img src={el.images} className="img-fluid" alt={el.title} />
                    <div className="title">{el.title}</div>
                    <div className="price">{el.price}$</div>
                    <div
                      className="buy"
                      onClick={(e) => {
                        dispatch(AddToCart(el));
                        e.target.innerText = " ✓ selected";
                        e.target.parentElement.classList.add("SelectedCart");
                      }}
                    >
                      Add To Cart <i class="bi bi-arrow-right"></i>
                    </div>
                  </Col>
                );
              })}
        </Row>
        {cartItems.length > 0 ? (
          <Link to="/bill">
            <div className="cartIcon" data-length={cartItems.length}>
              <i class="bi bi-bag-check-fill"></i>
            </div>
          </Link>
        ) : (
          ""
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
