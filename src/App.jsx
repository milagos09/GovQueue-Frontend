import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import Header from "./components/Carousel";
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