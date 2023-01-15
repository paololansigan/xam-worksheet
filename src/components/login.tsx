import React, { useState } from "react";

import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import signIn from "../api/signIn";
import CustomInput from "../components/customInput";

const CustomErrorContainer = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
}));

type Props = {};

type Inputs = {
  branchId: number;
  userName: string;
  password: string;
};

function Login({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = () => {
    //reset message
    setErrorMessage("");
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let result = signIn(data.branchId, data.userName, data.password);

    if (result.code === 200) {
      navigate("/dashboard");
    } else {
      setErrorMessage(result.errorMessage);
    }
  };

  return (
    <Box
      sx={{
        padding: "1rem 2rem",

        border: "1px solid black",
      }}
      data-testid="loginContainer"
    >
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleChange}
        data-testid="loginForm"
        id="loginForm"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {" "}
            {/* register your input into the hook by invoking the "register" function */}
            <CustomInput
              data-testid="BranchID"
              placeholder="Branch id"
              {...register("branchId", { required: true, valueAsNumber: true })}
            />
          </Grid>
          <Grid item xs={12}>
            {/* include validation with required or other standard HTML validation rules */}
            <CustomInput
              data-testid="userName"
              placeholder="User name"
              {...register("userName", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            {/* include validation with required or other standard HTML validation rules */}
            <CustomInput
              data-testid="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Grid>
        </Grid>
        {/* errors will return when field validation fails  */}
        {errors.branchId && (
          <CustomErrorContainer>
            <span>This branch id is required</span>
          </CustomErrorContainer>
        )}
        {errors.userName && (
          <CustomErrorContainer>
            <span>This user name is required</span>
          </CustomErrorContainer>
        )}
        {errors.password && (
          <CustomErrorContainer>
            <span>This password id is required</span>
          </CustomErrorContainer>
        )}
        {errorMessage && (
          <CustomErrorContainer>
            <span>{errorMessage}</span>
          </CustomErrorContainer>
        )}
        <br />{" "}
        <button data-textid="Submit" value="Submit">
          Submit
        </button>
      </form>
    </Box>
  );
}

export default Login;
