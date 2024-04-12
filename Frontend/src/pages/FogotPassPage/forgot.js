import React, { useState } from "react";
import { Box } from "@mui/material";
import Swal from "sweetalert2";
import api from "../../HTTPHandler/axiosConfig";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Forgot() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/reset");
      window.alert(response);
    } catch (e) {
      console.log(e);
    }
    // You may implement your password reset functionality here

    // For example, calling an API to reset the password

    // For demonstration purpose, let's just show a SweetAlert confirmation
    Swal.fire({
      icon: "success",
      title: "Password reset link sent!",
      text: `An email has been sent to ${email} with instructions to reset your password.`,
    });

    // Clear the email input field after showing the alert
    setEmail("");
  };
  return (
    <Box>
      <Box marginTop={20}>
        <form onSubmit={handleResetPassword}>
          <Box
            display={"flex"}
            height={350}
            flexDirection={"column"}
            maxWidth={400}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            padding={5}
            borderRadius={9}
            boxShadow={"8px 8px 15px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "15px 15px 30px #ccc",
              },
            }}
          >
            <Typography variant="h4" padding={3} textAlign={"center"}>
              Reset password
            </Typography>
            <TextField
              type="email"
              variant="outlined"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            />

            <Button
              sx={{ marginTop: 3, borderRadius: 5 }}
              size="large"
              variant="contained"
              color="success"
              type="submit"
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Forgot;
