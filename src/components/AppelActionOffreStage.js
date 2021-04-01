import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function AppelActionOffreStage() {
  return (
    <div className="grey-bg">
      <Row>
        <Col sm="12" md="6" className="">
          <div class="call-to-action-left-image">
            <img
              src="images/proxyclick-visitor-management-system-aLK9LiX69nA-unsplash.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col sm="12" md="6" className="call-to-action">
          <h2>Pourquoi publier une offre de stage ?</h2>
          <p>
            eStage est reconnu partout au Canada pour ses années d'expérience au
            près de ses nombreux clients et entreprises. Heureux d'avoir permis à la
            fois aux entreprises et aux candidats de trouver ce qui repondait à
            leur besoins.
          </p>
          <ul>
            <li>Gagner plus de visibilié.</li>
            <li>Parcourer la grande liste de candidats à notre disposition.</li>
            <li>Trouver rapidement des candidats et contactez-les.</li>
          </ul>
          <div class="call-to-action-buttom">
            <Button href="/publier-stage" variant="info">
              Publier une offre de stage maintenant!
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AppelActionOffreStage;
