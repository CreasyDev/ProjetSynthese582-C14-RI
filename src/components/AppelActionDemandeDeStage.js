import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function AppelActionOffreStage() {
  return (
    <div className="grey-bg">
      <Row>
        <Col sm="12" md="6" className="call-to-action call-to-action-left">
          <h2>Pourquoi publier une demande de stage ?</h2>
          <p>
            eStage rassemble plusieurs entreprises de la
            petite startup aux grosses PME du Canada. En tant que candidat, parcourez et trouvez le
            stage qui correspond à vos critères.
          </p>
          <ul>
            <li>Trouver rapidement votre stage.</li>
            <li>Faites-vous contactés par des entreprises.</li>
            <li>Contactez-nous si vous avez besoin d'aide.</li>
          </ul>
          <div class="call-to-action-buttom">
            <Button href="/publier-stage" variant="info">
              Publier une demandes de stage maintenant!
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" className="">
          <div class="call-to-action-left-image">
            <img src="images/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AppelActionOffreStage;
