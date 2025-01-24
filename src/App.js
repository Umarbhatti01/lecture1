import React from "react";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection"
import "./App.css"

function App(){
  return(
    <div className="background">
      <NavBar title="Navbar" home="Contact"/>
      <HeroSection/>
      <h1>Hello World</h1>
    </div>
  )
}
export default App;
