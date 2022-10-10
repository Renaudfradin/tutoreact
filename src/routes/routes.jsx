import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

//import pages
import Home from "../pages/Home.jsx";
import Sports from "../pages/SportTab.jsx"
import Count from "../pages/Count.jsx";
import NotFound from "../pages/404.jsx";

function Router() {

  //routes
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sport" element={<Sports />}></Route>
      <Route path="/count" element={<Count />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router;