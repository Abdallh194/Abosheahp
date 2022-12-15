import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteItemFromCart } from "../redux/ProductsSlice";

const Bill = () => {
  let cartItems = useSelector((state) => state.Weather.cartItems);
  let totlaPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totlaPrice += cartItems[i].price * cartItems[i].Quantity;
  }
  let dispatch = useDispatch();
  return (
    <div className="Bill">
      <Container>
        {cartItems.length > 0 ? (
          <Row>
            <Col sm={12} md={8}>
              <div className="d-flex CartBill">
                <div>Image</div>
                <div>Product Name</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Delete</div>
              </div>
              {cartItems.map((el) => {
                return (
                  <div key={el.id} className="cartitem BillItem">
                    <img src={el.images} alt={el.title} className="img-fluid" />

                    <div>{el.title}</div>
                    <div>{el.price}$</div>
                    <div>{el.Quantity}</div>
                    <div>{el.Quantity * el.price}$</div>
                    <i
                      class="bi bi-trash-fill deletBtn"
                      onClick={(e) => {
                        dispatch(DeleteItemFromCart(el.id));
                      }}
                    ></i>
                  </div>
                );
              })}
            </Col>
            <Col sm={12} md={4}>
              <div className="coupon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code"
                />
                <Button className="btn-warning">Apply Coupon</Button>
              </div>
              <div className=" BillHeader">
                <h5 className="PName"> Product Name</h5>

                <h5 className="PPrice">Price</h5>
              </div>
              <hr />
              {cartItems.map((el) => {
                return (
                  <div key={el.id} className="BillHeader">
                    <div>{el.title}</div>
                    <div>{el.Quantity * el.price}$</div>
                  </div>
                );
              })}
              <hr />
              <div className="BillHeader">
                <div>DisCount</div>
                <div>0$</div>
              </div>
              <div className="BillHeader">
                <div>Total</div>
                <div>{totlaPrice}$</div>
              </div>
              <hr />
              <Link to="/pay" className="pay">
                Proceed To Checkout
              </Link>
            </Col>
          </Row>
        ) : (
          <p className="warning">There Is No Item In Your Cart</p>
        )}
      </Container>
    </div>
  );
};

export default Bill;
