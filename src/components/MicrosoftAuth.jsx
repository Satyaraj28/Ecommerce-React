// MicrosoftAuth.jsx
import React, { useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";

const MicrosoftAuth = ({ onMicrosoftSuccess }) => {
  const [authError, setAuthError] = useState(null);
  const msalInstance = new PublicClientApplication({
    auth: {
      clientId: "YOUR_MICROSOFT_CLIENT_ID",
      authority: "https://login.microsoftonline.com/common",
    },
  });

  const handleLogin = () => {
    msalInstance
      .loginPopup({ scopes: ["user.read"] })
      .then((response) => {
        onMicrosoftSuccess(response);
      })
      .catch((error) => {
        setAuthError("Microsoft Login Failed");
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Microsoft</button>
      {authError && <p>{authError}</p>}
    </div>
  );
};

export default MicrosoftAuth;
