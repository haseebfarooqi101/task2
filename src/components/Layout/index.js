import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

export const Layout = ({children }) => {
  return (
    <div style={{height:"100vh", width : "100vw"}}>
      <div style={{ minHeight: "80vh" , minWidth: "100vw", backgroundColor: "#f0f2f5" }}>
        </div>
      <div >
        {children}  {/* 👈 all pages render here */}
      </div>
      
      {/* <Footer /> */}
    </div>
    // <>
    
    //   <div style={{ minHeight: "80vh" , minWidth: "100vw", backgroundColor: "#f0f2f5" }}>
    //     </div>
    //   <main className="layout-content">
    //     {children}  {/* 👈 all pages render here */}
    //   </main>
      
    //   <Footer />
    // </>
  );
};

  
