import React, { useState } from "react";
import { Typography, Button, TextField, Stack } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import { login } from "../../services/IsAuth";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // New state for error
  const navigate = useNavigate();

  const updateValue = (e, type) => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [type]: e.target.value,
    }));
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Clear previous error message
    try {
      const response = await login(loginData.email, loginData.password);
      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem("token", data.token);
        setLoading(false);
        navigate("/dashboard");
      } else {
        setLoading(false);
        // Display the error message from the backend
        setErrorMessage(data.message || "Login Failed: Please try again.");
      }
    } catch (error) {
      console.error("Login error", error);
      setLoading(false);
      setErrorMessage("Login error: Something went wrong."); // Set error message for unexpected issues
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #F0F8FF 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          component={"div"}
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "10px",
            display: "inline-block",
            justifyContent: "center",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(170,170,170, 0.5)",
            padding: "0px 35px 20px 35px",
            marginTop: "100px",
          }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
            onSubmit={HandleLogin}
            method="Post"
          >
            <h2 style={{ color: "#004953", textAlign: "center" }}>Login</h2>
            <Stack>
              <TextField
                type="email"
                value={loginData.email}
                sx={{
                  m: "10px 0 0 0",
                  width: { xs: "25ch", md: "35ch", sm: "25ch" },
                }}
                onChange={(e) => updateValue(e, "email")}
                fullWidth
                label="Email"
                required
                variant="filled"
              />
            </Stack>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              spacing={2}
              mt={"10px"}
            >
              <TextField
                type="password"
                sx={{
                  m: "10px 0 0 0",
                  width: { xs: "25ch", md: "35ch", sm: "25ch" },
                }}
                value={loginData.password}
                onChange={(e) => updateValue(e, "password")}
                fullWidth
                label="Password"
                variant="filled"
                required
              />
            </Stack>

            {/* Display error message in red if there is an error */}
            {errorMessage && (
              <Typography
                sx={{
                  color: "red",
                  marginTop: "10px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {errorMessage}
              </Typography>
            )}

            <Button
              type="submit"
              sx={{
                marginTop: "20px",
                textTransform: "none", // Prevents all uppercase
              }}
              color="primary"
              variant="contained"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </Button>
          </Form>
        </Typography>
      </div>
    </div>
  );
}

export default LoginPage;
