
import Header from "./Header";
import React from "react";

function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
      className="bg-white"
    >
      <Header />
      {children}
   
    </div>
  );
}

export default Layout;

