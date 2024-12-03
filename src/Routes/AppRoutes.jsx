import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Favs from "./Favs";
import Contact from "./Contact";
import { routes } from "../Components/utils/routes";

const AppRoutes = () => {
  return (  
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.pnf} element={<h1>Page not found - Error 404</h1>}/>
      </Routes>
  );
};

export default AppRoutes;