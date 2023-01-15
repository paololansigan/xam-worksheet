import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type userData = {
  branchId: number;
  userName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  password: string;
};

type Props = { userList: Array<userData>; removeRow: Function };

function UserTable({ userList, removeRow }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Branch ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row, i) => (
            <TableRow
              key={row.firstName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell>{row.branchId}</TableCell>
              <TableCell>{row.userName}</TableCell>
              <TableCell>
                {row.firstName} {row.middleName.charAt(0)}. {row.lastName}
              </TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>
                <button
                  type="button"
                  onClick={() => {
                    removeRow(i);
                  }}
                >
                  REMOVE
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
