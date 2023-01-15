import React, { useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomTheme } from "./theme";
import "./App.css";

//PAGES
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

import Navigation from "./components/navigation";

import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Navigation>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

