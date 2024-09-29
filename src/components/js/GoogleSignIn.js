import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext.js";

const GoogleSignIn = () => {
  const { currentUser, googleSignIn } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [currentUser]);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? null : (
    <Button
      variant="outlined"
      onClick={handleSignIn}
      sx={[
        (theme) => ({
          marginLeft: "5px",
          color: theme.palette.text.primary,
          fontSize: "0.8em",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }),
      ]}
    >
      <img
        height={25}
        width={25}
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Login with Google</span>
    </Button>
  );
};

export default GoogleSignIn;
