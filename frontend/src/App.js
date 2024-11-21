import React from "react";
import "./styles/App.css";
import Login from "./pages/Login";
import Home from './pages/Home';
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/CoursePage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/CoursePage/:courseId" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
