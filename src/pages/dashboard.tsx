import React, { useEffect, useState } from "react";
import LS from "../helpers/localStorage";

import { Box, Grid, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import NewUserForm from "../components/newUserForm";
import UserTable from "../components/userTable";
import users_data from "../users_data";

type Props = {};

type userData = {
  branchId: number;
  userName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  password: string;
};

function Dashboard({}: Props) {
  const userInfo = LS.get("user-info");
  const navigate = useNavigate();
  const [userList, setUserList] = useState<Array<userData>>(users_data);
  const [errorMessage, setErrorMessage] = useState<String>("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);

  const handleAddUser = (data: userData) => {
    // check if userName exist
    const foundUser = userList.find((e) => e.userName === data.userName);
    if (foundUser?.branchId === data.branchId) {
      setErrorMessage("Username of that branch ID already exist");
    } else if (
      foundUser?.firstName === data.firstName &&
      foundUser?.middleName === data.middleName &&
      foundUser?.lastName === data.lastName
    ) {
      setErrorMessage("This person already belong to a branch");
    } else {
      setUserList((prev) => [...prev, data]);
    }
  };

  const removeRow = (index: number) => {
    setUserList(userList.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1488px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5"> {userInfo.userName}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <NewUserForm
              onAddUser={handleAddUser}
              errorMessage={errorMessage}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <UserTable userList={userList} removeRow={removeRow} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
