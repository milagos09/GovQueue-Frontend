import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import Header from "./layouts/Header";
// import admins from "../fake/admins.json";
 
export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      {/* <Body/> */}
      {/* <Footer/> */}
    </>
  );
}