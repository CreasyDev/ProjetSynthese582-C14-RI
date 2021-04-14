import React from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import PublicRouteManagement from "./PublicRouteManagement";
import BottomJobList from "./components/BottomJobList";

function App() {
  return (
    <div className="">
      <Menu />
      <PublicRouteManagement />
      <BottomJobList />
      <Footer />
    </div>
  );
}

export default App;