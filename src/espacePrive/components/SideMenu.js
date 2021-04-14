import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function Menu() {
  return (
    <Navbar expand="sm" className="full-content side-menu">
      <Navbar.Brand href="/" className="brand">eStage</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav defaultActiveKey="/espace-prive" className="flex-column">
          <Nav.Item>
            <Nav.Link href="/espace-prive">Accueil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-prive/offres-de-stage">
              Offres de stage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-prive/demandes-de-stage">
              Demandes de stage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-prive/candidats">Candidats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-prive/entreprises">Entreprises</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/espace-prive/modifier-infos">Modifier mes infos</Nav.Link>
          </Nav.Item>
          <br /><br />
          <Nav.Item>
            <Nav.Link href="#">Déconnexion</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
