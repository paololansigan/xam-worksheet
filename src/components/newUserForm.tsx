import React from "react";

import { Box, Grid } from "@mui/material";

import CustomInput from "../components/customInput";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  onAddUser: Function;
  errorMessage: String;
};

type Inputs = {
  branchId: number;
  userName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  password: string;
};

function NewUserForm({ onAddUser, errorMessage }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onAddUser(data);
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CustomInput
              type="number"
              placeholder="Branch id"
              {...register("branchId", { required: true, valueAsNumber: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              placeholder="Username"
              {...register("userName", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              placeholder="Middle Name"
              {...register("middleName", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              placeholder="Position"
              {...register("position", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
          </Grid>

          {errorMessage && (
            <Grid item xs={12}>
              {errorMessage}
            </Grid>
          )}

          <Grid item xs={12} md={4} />
          <Grid item xs={12} md={4}>
            <input
              type="button"
              value="RESET"
              onClick={() => {
                reset();
              }}
            />
          </Grid>
          <Grid item md={4}>
            <input type="submit" value="ADD" />{" "}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default NewUserForm;
