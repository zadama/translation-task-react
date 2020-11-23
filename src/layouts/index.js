import React from "react";

import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  console.log("here");
  return (
    <div>
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
}
