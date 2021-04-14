import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function Menu() {
  return (
    <Navbar expand="sm" className="full-content side-menu">
      <Navbar.Brand href="/">eStage</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav defaultActiveKey="/espace-gestion" className="flex-column">
          <Nav.Item>
            <Nav.Link href="/espace-gestion">Accueil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-gestion/offres-de-stage">
              Offres de stage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-gestion/demandes-de-stage">
              Demandes de stage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-gestion/candidats">Candidats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-gestion/entreprises">Entreprises</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-gestion/entreprises">Modifier mes infos</Nav.Link>
          </Nav.Item>
          <br /><br />
          <Nav.Item>
            <Nav.Link href="/">Déconnexion</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
