import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<div>Detail</div>} />
          <Route path="/favs" element={<div>Favs</div>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

