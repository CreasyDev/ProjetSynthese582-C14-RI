import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import IntershipDetailCard from "../../components/IntershipDetailCard";
import jobs from "../../../data/jobs";

const ListeDeDemandeDeStages = (jobs, type) => {
  return jobs.map((job) => {
    return (
      <Col sm="12" className="mb-1">
        <IntershipDetailCard offer={job} type={type} />
      </Col>
    );
  });
};

function DemandesDeStage() {
  return (
    <div className="espace-gestion-accueil-container">
      <div className="title">
        <h4>Demandes de stage <FontAwesomeIcon icon={faLevelDownAlt} /></h4>
      </div>
      <Row>
        <Col sm="12"  className="intership-request">
          <Row>{ListeDeDemandeDeStages(jobs, 'demande')}</Row>
        </Col>
      </Row>
    </div>
  );
}

export default DemandesDeStage;
