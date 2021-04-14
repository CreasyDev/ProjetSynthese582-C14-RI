import React from "react";
import { Container } from "react-bootstrap";
import Menu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";
import PrivateRouteManagement from "./PrivateRouteManagement";

function App() {
  return (
    <div>
      <Menu />
      <TopMenu />
      <div className="full-content private-space-content-body">
        <Container className="private-space-container">
          <PrivateRouteManagement />
        </Container>
      </div>
    </div>
  );
}

export default App;
