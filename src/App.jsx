import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Services from "./components/Services";
import Signup from "./components/Signup";

export default function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Signup" element={<Signup />} />


        </Routes>
      </BrowserRouter>


    </div>
  );
}