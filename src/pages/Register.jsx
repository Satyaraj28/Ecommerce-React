import React from 'react';
import { Footer, Header } from "../components";
import { Link } from 'react-router-dom';
import '../styles/register.css'; // External CSS for custom styles

const Register = () => {
    return (
        <>
            <Header />
            <div className="container my-5 py-5">
                <h1 className="text-center text-primary mb-4">Create Your Account</h1>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-6 col-lg-5 col-sm-8 mx-auto">
                        <div className="card shadow-lg border-0 rounded">
                            <div className="card-body">
                                <form>
                                    <div className="form-group my-3">
                                        <label htmlFor="Name" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="Name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="Email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="Email"
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="Password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="Password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <div className="my-3">
                                        <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-lg btn-dark my-3 w-100" type="submit" disabled>
                                            Register
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

export default Register;
