import { Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";

import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const onSidebarChange = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <Navbar onSidebarChange={onSidebarChange} />
      <Sidebar sidebarOpen={sidebarOpen} onSidebarChange={onSidebarChange} />
      <Routes>
        <Route element={<Home />} path="" />
        <Route element={<Home />} path="home" />
        <Route element={<ContactUs />} path="contact-us" />
        <Route element={<AboutUs />} path="about-us" />
      </Routes>
    </>
  );
}

export default App;
