import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Appshell({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-16 my-16 max-w-[1920px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}
