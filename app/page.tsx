"use client"
import React from 'react'
import Navbar from "./Components/Navbar";
import Homee from "./Components/Homee";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    
    <> 
     
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homee />}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
    
  );
}
