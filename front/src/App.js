import React from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
