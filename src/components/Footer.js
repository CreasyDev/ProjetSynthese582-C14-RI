import React from "react";
import {
  Col,
  Container,
  Row,
  Nav,
} from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="margin-left-right-0">
          <Col sm="12" md="5" className="text-align-left">
            <span className="m-0 text-center copyRight">
              © {new Date().getFullYear()} <a href="#">eStage</a>
              &nbsp;-&nbsp;Projet éducationnel
            </span>
          </Col>
          <Col sm="12" md="7" className="">
            <>
              <Nav className="ml-auto menu-bottom clear">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/apropos">À propos</Nav.Link>
                <Nav.Link href="/politique">Confidentialité</Nav.Link>
                <Nav.Link href="/contact">Nous joindre</Nav.Link>
                <Nav.Link href="#">Partenaires</Nav.Link>
              </Nav>
            </>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
