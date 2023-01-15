import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../login";

afterEach(() => {
  cleanup();
});

test("should render login properly ", () => {
  render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>,
  );
  const loginElement = screen.getByTestId("loginContainer");
  expect(loginElement).toBeInTheDocument();

  expect(loginElement).toHaveTextContent("Login");

  //form fields
  const BranchIDElement = screen.getByTestId("BranchID");
  expect(BranchIDElement).toHaveAttribute("placeholder", "Branch id");

  const UserNameElement = screen.getByTestId("userName");
  expect(UserNameElement).toHaveAttribute("placeholder", "User name");

  const PasswordElement = screen.getByTestId("password");
  expect(PasswordElement).toHaveAttribute("placeholder", "Password");
});

it("Test form submit and validation", () => {
    const handleClick = jest.fn()
  const { getByPlaceholderText, getByText, findByTestId } = render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>,
  );
  const branchIDInput = getByPlaceholderText(/Branch id/i);
  const usernameInput = getByPlaceholderText(/User name/i);
  const passwordInput = getByPlaceholderText(/Password/i);

  fireEvent.change(branchIDInput, { target: { value: 10001 } });
  fireEvent.change(usernameInput, { target: { value: "testuser01" } });
  fireEvent.change(passwordInput, { target: { value: "pa55w0rd001" } });

  const button = getByText("Submit");

  fireEvent.click(button);
});
