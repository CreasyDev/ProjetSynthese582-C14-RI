import React from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Body from "./RouteManagement";
import BottomJobList from "./components/BottomJobList";

function App() {
  return (
    <div className="">
      <Menu />
      <Body />
      <BottomJobList />
      <Footer />
    </div>
  );
}

export default App;