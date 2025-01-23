// GoogleAuth.jsx
import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuth = ({ onGoogleSuccess }) => {
  return (
    <GoogleLogin
      onSuccess={onGoogleSuccess}
      onError={() => console.log("Google Login Failed")}
    />
  );
};

export default GoogleAuth;
