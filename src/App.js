import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Auth/Auth/AuthContext";
import RoutingComp from "./Routes";   

import "./Stylings/Style.css";

const App = () => {
  return (
    <AuthProvider>
      
        <RoutingComp />
        
      
    </AuthProvider>
  );
};

export default App;
