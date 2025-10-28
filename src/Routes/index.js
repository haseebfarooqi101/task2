import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import {Layout} from  "../components/Layout";
import {Home}  from "../pages/Home";
import {PublicRoute} from "../Routes/PublicRoute";
const RoutingComp= () => {
return (
<Router>  
<Routes>
       
        {/* <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
        <Route 
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/page1" replace />
          ) : (
            <Login handleLogin={handleLogin} />
          )
        }
      /> */}
      <Route path="/" element={<PublicRoute comp={Home} layout={Layout} />} />
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
      </Router>
      );



};
export default RoutingComp;