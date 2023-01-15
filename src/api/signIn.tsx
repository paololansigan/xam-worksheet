//just imagine  this is calling an actual api from back-end lol
import userList from "../users_data";
import LS from "../helpers/localStorage";

export default function signIn(
  branchId: number,
  userName: string,
  password: string,
) {
  const foundBranch = userList.find((e) => e.branchId === branchId);
  // 1: check if branch is found, if not return error message
  if (!foundBranch) {
    return { errorMessage: "branch not found", code: 401 };
  } else if (foundBranch?.userName !== userName) {
    // 2: check if username is found in that branch , if not return error message
    return { errorMessage: "username not found", code: 401 };
  } else if (foundBranch?.password !== password) {
    // 3: check if password is correct, if not return error message
    return { errorMessage: "wrong password", code: 401 };
  } else {
    // 4: SUCCESS
    // save to local storage
    LS.save("user-info", foundBranch);
    return { errorMessage: "logged in!", code: 200 };
  }
}
