import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage";
import About from "./components/pages/ActionCard/About";
import Reservation from "./components/pages/reservation/Reservation";
import { Contact } from "./components/pages/Contact";
import AdminPage from "./components/pages/AdminPage";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

