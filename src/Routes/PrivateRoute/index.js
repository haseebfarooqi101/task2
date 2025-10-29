// src/Routes/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Utils/Helper/index";

export const PrivateRoute = ({ component: Component, layout: Layout }) => {
  const loggedIn = isUserLoggedIn();

  if(loggedIn){
    return(
      <Layout>
      <Component />
    </Layout>
    )
  }

  return zzzzzzzz(
    <Navigate to="/login" replace />
  );
};
