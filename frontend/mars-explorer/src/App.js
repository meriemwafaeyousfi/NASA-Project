import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "primeflex/primeflex.css";
import "./App.css";
import Home from "./pages/Home";
import 'primereact/resources/themes/md-light-deeppurple/theme.css';   
import 'primereact/resources/primereact.min.css';           
import 'primeicons/primeicons.css';                         
import 'primeflex/primeflex.css';  
import Rover from "./pages/Rover";



function AnimatedRoutes() {
  const location = useLocation(); // Tracks current route

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/rover" element={<Rover  key={location.state?.name} />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
 
  return (
    <Router>
    <AnimatedRoutes />
  </Router>
   
  );
}

export default App;
