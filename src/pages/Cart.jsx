import React from "react";
import { Footer, Header } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAddItem = (item) => dispatch(addCart(item));
  const handleRemoveItem = (item) => dispatch(delCart(item));

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  const calculateTotalItems = () =>
    cartItems.reduce((total, item) => total + item.qty, 0);

  const calculateTotalAmount = () => calculateSubtotal() + 30.0; // Adding a fixed shipping fee

  const EmptyCart = () => (
    <div className="container text-center py-5 bg-light">
      <h4 className="display-5">Your Cart is Empty</h4>
      <Link to="/" className="btn btn-outline-dark mt-4">
        <i className="fa fa-arrow-left"></i> Continue Shopping
      </Link>
    </div>
  );

  const CartItem = ({ item }) => (
    <div className="row d-flex align-items-center my-3">
      <div className="col-lg-3 col-md-12">
        <div className="bg-image rounded" style={{ position: "relative" }}>
          <img
            src={item.image}
            alt={item.title}
            width={120}
            height={100}
            className="img-fluid rounded"
          />
          <div className="zoom-overlay"></div>
        </div>
      </div>
      <div className="col-lg-5 col-md-6">
        <strong>{item.title}</strong>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-danger px-3"
            onClick={() => handleRemoveItem(item)}
            aria-label="Decrease quantity"
          >
            <i className="fas fa-minus-circle"></i>
          </button>
          <p className="mx-3">{item.qty}</p>
          <button
            className="btn btn-outline-success px-3"
            onClick={() => handleAddItem(item)}
            aria-label="Increase quantity"
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
        <p className="text-start">
          <strong>{item.qty} x ${item.price}</strong>
        </p>
      </div>
    </div>
  );

  const OrderSummary = () => (
    <div className="card mb-4 shadow-lg">
      <div className="card-header py-3 bg-primary text-white">
        <h5 className="mb-0">Order Summary</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products ({calculateTotalItems()}) <span>${Math.round(calculateSubtotal())}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping <span>$30.00</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <strong>Total amount</strong>
            <strong>${Math.round(calculateTotalAmount())}</strong>
          </li>
        </ul>
        <Link
          to="/checkout"
          className="btn btn-dark btn-lg btn-block mt-3 animated-button"
        >
          Go to Checkout
        </Link>
      </div>
    </div>
  );

  const ShowCart = () => (
    <section className="h-100 gradient-custom py-5">
      <div className="container">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Item List</h5>
              </div>
              <div className="card-body">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Header />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {cartItems.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
