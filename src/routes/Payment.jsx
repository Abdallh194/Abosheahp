import React from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteAllItemsCard } from "../redux/ProductsSlice";

const Payment = () => {
  let cartItems = useSelector((state) => state.Weather.cartItems);
  let totlaPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totlaPrice += cartItems[i].price * cartItems[i].Quantity;
  }
  // modal
  let [ConfirmOrder, setConfirmOrder] = useState("");
  let OpenModal = (Order) => {
    setConfirmOrder(Order);
  };
  let CloseModal = () => {
    setConfirmOrder(false);
  };
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Email, setEmail] = useState("");
  let [Mobile, setMobile] = useState("");
  let [Address_01, setAddress_01] = useState("");
  let [Address_02, setAddress_02] = useState("");
  let [Country, setCountry] = useState("");
  let [City, setCity] = useState("");
  let [ZipCode, setZipCode] = useState("");
  let [State, setState] = useState("");
  // form valid
  let [FNameValid, setFNameValid] = useState(false);
  let [LNameValid, setLNameValid] = useState(false);
  let [EmailValid, setEmailValid] = useState(false);
  let [MobileValid, setMobileValid] = useState(false);
  let [AddressoneValid, setAddressoneValid] = useState(false);
  let [AddresstwoValid, setAddresstwoValid] = useState(false);
  let [CountryValid, setCountryValid] = useState(false);
  let [CityValid, setCityValid] = useState(false);
  let [ZipValid, setZipValid] = useState(false);
  let [StateValid, setStateValid] = useState(false);
  let [infoValid, setinfoValid] = useState(false);
  let dispatch = useDispatch();
  let ConfirmModal = () => {
    CloseModal();
    dispatch(DeleteAllItemsCard());
    navigae("/");
  };
  let navigae = useNavigate();
  let [infoNotValid, setinfoNotValid] = useState(false);
  return (
    <div className="Payment">
      <Container>
        {cartItems.length > 0 ? (
          <Row>
            <Col sm={12} md={8}>
              <div className="head">BILLING ADDRESS</div>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (
                    FNameValid === false ||
                    LNameValid === false ||
                    EmailValid === false ||
                    MobileValid === false ||
                    AddressoneValid === false ||
                    AddresstwoValid === false ||
                    CountryValid === false ||
                    CityValid === false ||
                    ZipValid === false ||
                    StateValid === false
                  ) {
                    setinfoValid(false);
                  } else {
                    setinfoValid(true);
                  }
                }}
              >
                <div className="input_Custom">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={(e) => {
                      if (e.target.value.length < 3) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setFirstName(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setFNameValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="text"
                    className="form-control input_custom"
                    placeholder="Last Name"
                    onChange={(e) => {
                      if (e.target.value.length < 3) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setLastName(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setLNameValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="email"
                    className="form-control input_custom"
                    placeholder="E-Mail"
                    onChange={(e) => {
                      if (e.target.value.length < 8) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setEmail(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setEmailValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="number"
                    className="form-control input_custom"
                    placeholder="Mobile No"
                    onChange={(e) => {
                      if (e.target.value.length < 10) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setMobile(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setMobileValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="text"
                    className="form-control input_custom"
                    placeholder="Address 1"
                    onChange={(e) => {
                      if (e.target.value.length < 3) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setAddress_01(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setAddressoneValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="text"
                    className="form-control input_custom"
                    placeholder="Address 2"
                    onChange={(e) => {
                      if (e.target.value.length < 3) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setAddress_02(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setAddresstwoValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="text"
                    className="form-control input_custom"
                    placeholder="Country"
                    onChange={(e) => {
                      if (e.target.value.length < 2) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setCountry(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setCountryValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="text"
                    className="form-control input_custom"
                    placeholder="City"
                    onChange={(e) => {
                      if (e.target.value.length < 3) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setCity(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setCityValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="text"
                    className="form-control input_custom"
                    placeholder="State"
                    onChange={(e) => {
                      if (e.target.value.length < 4) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setState(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setStateValid(true);
                      }
                    }}
                  />
                </div>
                <div className="input_Custom">
                  <input
                    type="number"
                    className="form-control input_custom"
                    placeholder="ZIP Code"
                    onChange={(e) => {
                      if (e.target.value.length < 4) {
                        e.target.classList.add("wrong");
                        e.target.classList.remove("true");
                      } else {
                        setZipCode(e.target.value);
                        e.target.classList.add("true");
                        e.target.classList.remove("wrong");
                        setZipValid(true);
                      }
                    }}
                  />
                </div>
                {infoNotValid ? (
                  <div className="error">
                    There is an error in the data, please check Your data
                  </div>
                ) : (
                  ""
                )}
                <input
                  type="submit"
                  value={infoValid === true ? "Submitted ✓" : "Submit"}
                  className="form-control"
                  id="submit"
                  onClick={(e) => {
                    if (infoValid) {
                      e.target.classList.add("infoValid");
                      setinfoNotValid(false);
                    } else {
                      e.target.classList.remove("infoValid");
                      setinfoNotValid(true);
                    }
                  }}
                />
              </Form>
            </Col>
            <Col sm={12} md={4} className="mt-4">
              <div className="head">BILL</div>
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
              <div className="head">PAYMENT</div>
              <div className="pt-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Paypal
                </label>
              </div>
              <div className="pt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Direct Check
                </label>
              </div>
              <div className="pt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Bank Transfer
                </label>
              </div>
              {infoValid ? (
                <div
                  className="pay"
                  onClick={() => {
                    OpenModal(cartItems);
                  }}
                >
                  Confirm Order
                </div>
              ) : (
                ""
              )}

              <ReactModal isOpen={ConfirmOrder} onRequestClose={CloseModal}>
                <div className="ModalItem">
                  {/* <i className="bi bi-x ModalClose" onClick={CloseModal}></i> */}
                  <div className="ModalHead">
                    Your Order has been registered successfully
                  </div>
                  <i class="bi bi-check-circle-fill subtrue mb-2 mt-2"></i>
                  <div className="ModalHead">
                    at the address :{" "}
                    <div>
                      {Country} , {City} , {State}
                    </div>
                    <hr />
                  </div>
                  <div className="ModalHead">After 3 days From Now</div>
                  <div className="confirm" onClick={ConfirmModal}>
                    Confirm
                  </div>
                </div>
              </ReactModal>
            </Col>
          </Row>
        ) : (
          <p className="warning">There Is No Item In Your Cart</p>
        )}
      </Container>
    </div>
  );
};

export default Payment;
