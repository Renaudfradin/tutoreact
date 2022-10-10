import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Sports from "../pages/SportTab.jsx"
import NotFound from "../pages/404.jsx";

function Router() {
  
  return(
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/sport" element={<Sports />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router;