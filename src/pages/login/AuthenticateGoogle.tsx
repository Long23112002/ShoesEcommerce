import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../services/localStorageToken";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function AuthenticateGoogle() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    console.log(window.location.href);

    const authCodeRegex = /code=([^&]+)/;
    const isMatch = window.location.href.match(authCodeRegex);

    if (isMatch) {
      const authCode = isMatch[1];

      fetch(`http://localhost:8080/api/v1/auth/google-login?code=${authCode}`, {
        method: "POST",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setToken(data.result?.token);
          setIsLoggedin(true);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      navigate("/login");
    }
  }, [isLoggedin, navigate]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress></CircularProgress>
        <Typography>Authenticating...</Typography>
      </Box>
    </>
  );
}
