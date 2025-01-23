import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useWishlist } from "../context/WishlistContext";

const Header = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const { wishlist } = useWishlist();

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        {/* Website Logo */}
        <NavLink className="navbar-brand fw-bold fs-3 text-primary" to="/">
          React E-Shop
        </NavLink>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#headerNav"
          aria-controls="headerNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="headerNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold mx-2" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold mx-2"
                to="/product"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold mx-2"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold mx-2"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
           
          </ul>

          {/* Action Buttons */}
          <div className="d-flex align-items-center">
            <NavLink
              to="/login"
              className="btn btn-outline-primary rounded-pill px-3 me-2"
              aria-label="Login"
            >
              <i className="fas fa-sign-in-alt me-2"></i>Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-secondary rounded-pill px-3 me-2"
              aria-label="Register"
            >
              <i className="fas fa-user-plus me-2"></i>Register
            </NavLink>
            <NavLink
              to="/wishlist"
              className="btn btn-outline-success rounded-pill px-3 me-2"
              aria-label="Wishlist"
            >
              <i className="fas fa-heart me-2"></i>Wishlist ({wishlist.length})
            </NavLink>
            <NavLink
              to="/cart"
              className="btn btn-outline-danger rounded-pill px-3"
              aria-label="Cart"
            >
              <i className="fas fa-shopping-cart me-2"></i>Cart ({cartItems.length})
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
