import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Control from "./pages/Control";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function MainRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/control" Component={Control} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default MainRouter;
