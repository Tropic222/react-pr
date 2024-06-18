import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/index";
import { Navigate } from "react-router-dom";

const AppRouter = () => {
  const isAuth = false;

  return (
    isAuth
    ?
      <Routes>
      {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
      ))}
      {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
      ))}
            <Route path="/*" element={<Navigate to="/post" replace />} />

      </Routes>
    :
      <Routes>
      {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    
      
  );
};

export default AppRouter;