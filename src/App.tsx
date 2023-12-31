import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import Contacts from "./components/contact/Contacts";
import ContactForm from "./components/contact/Contact_Form";
import EditContact from "./components/contact/Edit_Contact";
import Dashboard from "./components/Dasboard/Charts";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <h1 className="text-white w-full shadow shadow-slate-700 top-0 text-2xl  bg-blue-600 font-bold z-50 p-4">
        {currentRoute === "/"
          ? "Contact Management App"
          : currentRoute === "/contact_form"
          ? "Contacts"
          : "Charts and Maps"}
      </h1>
      <div className="flex w-full ">
        <div className="sticky  top-0 h-screen">
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/contact_form" element={<ContactForm/>}/>
          <Route path="/edit/:id" element={<EditContact/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
