import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Cardone from "./components/Cardone"
import Card from "./components/Card";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Cardone/>
      <Card/>
      <Footer/> 
    </div>
  );
}

export default App;
