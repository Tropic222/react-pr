import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/index";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    isAuth
      ? (
        <Routes>
          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="/*" element={<Navigate to="/posts" replace />} />  {/* Исправлено с post на posts */}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      )
  );
};

export default AppRouter;