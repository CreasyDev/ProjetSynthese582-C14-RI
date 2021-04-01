import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function BottomJobList() {
  return (
    <section className="grey-bg home-last-section">
    <Container>
      <h5>Ils sont à la recherche d'un stage :</h5>
      <Row>
        <Col sm="12" md="3" className="jobs-labels">
          <ul>
            <li>
              <a href="#">Graphic design</a>
            </li>
            <li>
              <a href="#">Designer jobs</a>
            </li>
            <li>
              <a href="#">Frontend Developer jobs</a>
            </li>
            <li>
              <a href="#">Developer jobs</a>
            </li>
          </ul>
        </Col>
        <Col sm="12" md="3" className="jobs-labels">
          <ul>
            <li>
              <a href="#">Resources jobs</a>
            </li>
            <li>
              <a href="#">Marketing online jobs</a>
            </li>
            <li>
              <a href="#">Mobile Developer jobs</a>
            </li>
            <li>
              <a href="#">App Developer jobs</a>
            </li>
          </ul>
        </Col>
        <Col sm="12" md="3" className="jobs-labels">
          <ul>
            <li>
              <a href="#">Product Manager jobs</a>
            </li>
            <li>
              <a href="#">Sales jobs</a>
            </li>
            <li>
              <a href="#">Logo Design jobs</a>
            </li>
            <li>
              <a href="#">Seo jobs</a>
            </li>
          </ul>
        </Col>
        <Col sm="12" md="3" className="jobs-labels">
          <ul>
            <li>
              <a href="#">Articles design</a>
            </li>
            <li>
              <a href="#">Android jobs</a>
            </li>
            <li>
              <a href="#">Logo Design jobs</a>
            </li>
            <li>
              <a href="#">Seo jobs</a>
            </li>
          </ul>
        </Col>
        </Row>
    </Container>
  </section>
  );
}

export default BottomJobList;
