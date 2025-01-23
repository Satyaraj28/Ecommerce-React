// AuthPage.jsx
import React from "react";
import GoogleAuth from "./GoogleAuth";
import MicrosoftAuth from "./MicrosoftAuth";

const AuthPage = () => {
  const handleGoogleSuccess = (response) => {
    console.log("Google login successful", response);
    // You can send the response token to your backend for validation or to fetch user data
  };

  const handleMicrosoftSuccess = (response) => {
    console.log("Microsoft login successful", response);
    // You can send the response to your backend or handle it accordingly
  };

  return (
    <div className="auth-container">
      <h1>Authentication</h1>
      <GoogleAuth onGoogleSuccess={handleGoogleSuccess} />
      <MicrosoftAuth onMicrosoftSuccess={handleMicrosoftSuccess} />
    </div>
  );
};

export default AuthPage;
