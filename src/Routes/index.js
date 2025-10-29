import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import {Layout} from  "../components/Layout";
import {Home}  from "../pages/Home";
import {PublicRoute} from "../Routes/PublicRoute";
import {PrivateRoute} from "../Routes/PrivateRoute";
//import { isUserLoggedIn } from "../Utils/Helper/index";
import {Login} from "../pages/Login";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { About } from "../pages/About";
import { About2 } from "../pages/About2";
import { About3 } from "../pages/About3";
const RoutingComp= () => {
  //const isLoggedIn = isUserLoggedIn();
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
      <Route path="/" element={<PublicRoute component={Home} layout={Layout} />} />
        <Route path="/page1" element={<PublicRoute component={Page1} layout={Layout} />} />
        <Route path="/page2" element={<PublicRoute component={Page2} layout={Layout} />} />
        <Route path="/login" element={<PublicRoute component={Login} layout={Layout} />} />

       {/* Private Routes */}
        <Route path="/about" element={<PrivateRoute component={About} layout={Layout} />} />
        <Route path="/about2" element={<PrivateRoute component={About2} layout={Layout} />} />
        <Route path="/about3" element={<PrivateRoute component={About3} layout={Layout} />} />


        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
      </Router>
      );



};
export default RoutingComp;