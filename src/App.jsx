import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
// import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";
import ContactForm from "./Pages/ContactForm";
import "./App.css"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
