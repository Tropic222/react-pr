import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/index";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ? (
        <Routes>
          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="/*" element={<Navigate to="/posts" replace />} />  
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