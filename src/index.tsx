import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  MainPage  from "./components/pages/MainPage";
import About from "./components/pages/ActionCard/About";
import Reservation from "./components/pages/Reservation";
<<<<<<< Updated upstream
import { Contact } from "./components/pages/Contact";
=======
import  Contact  from "./components/pages/Contact";
>>>>>>> Stashed changes
import AdminPage from "./components/pages/AdminPage";
import  LoginPage  from "./components/pages/LoginPage";
import { Register } from "./components/pages/Register";
import PersonnelPage from "./components/pages/PersonnelPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/aboutUsPage" element={<About />} />
        <Route path="/reservationPage" element={<Reservation />} />
        <Route path="/contactPage" element={<Contact />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<Register />} />
        <Route path="/PersonnelPage"element={<PersonnelPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

