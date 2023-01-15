import Box from "@mui/material/Box";
import React from "react";
import LoginForm from "../components/login";
import { useForm } from "react-hook-form";

type Props = {};

function login({}: Props) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <LoginForm />
    </Box>
  );
}

export default login;
