import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from '../router/index';


const AppRouter = () => {
  return (
      <Routes>
          {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
          ))}
      </Routes>
  );
};

export default AppRouter;