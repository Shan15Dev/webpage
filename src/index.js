import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import  AboutUs  from "./pages/AboutUs";
import  Navigation  from "./components/Navigation";
import Projects from "./pages/Projects";
import Timetable from "./pages/Timetable";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/timetable" element={<Timetable />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();