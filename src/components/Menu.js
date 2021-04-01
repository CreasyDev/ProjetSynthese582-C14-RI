import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function Menu() {
  return (
      <Navbar variant="dark" expand="lg" className="transparent menu-top">
        <Navbar.Brand href="/">
          eStage
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#link">
              <Button
                href="/offres-de-stage"
                variant="success"
              >
                Trouvez votre stage
              </Button>
            </Nav.Link>
            <Nav.Link href="#link">
              <Button
                href="/candidats"
                variant="success"
              >
                Trouvez votre futur stagiaire
              </Button>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#link">
              <Button
                href="/connexion"
                variant="light"
              >
                Connexion
              </Button>
            </Nav.Link>
            <Nav.Link href="#link">
              <Button
                href="/inscription"
                variant="secondary"
              >
                Inscription
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Menu;
