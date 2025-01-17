import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../components";
import '../styles/login.css'; // Import the CSS for login page

const Login = () => {
  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <h1 className="text-center text-primary mb-4">Login to Your Account</h1>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 col-lg-5 col-sm-8 mx-auto">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body">
                <form>
                  <div className="form-group my-3">
                    <label htmlFor="floatingInput" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="floatingPassword" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="floatingPassword"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="my-3">
                    <p>New here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-lg btn-dark my-3 w-100" type="submit" disabled>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
