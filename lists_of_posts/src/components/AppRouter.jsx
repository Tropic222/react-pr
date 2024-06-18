import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/index";

const AppRouter = () => {
  return (
      <Routes>
          {privateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
          ))}
          {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
          ))}
      </Routes>
  );
};

export default AppRouter;