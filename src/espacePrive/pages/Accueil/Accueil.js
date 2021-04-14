import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import IntershipCard from "../../components/IntershipCard";
import jobs from "../../../data/jobs";

const jobOfferList = (jobs, type) => {
  return jobs.map((job) => {
    return (
      <Col sm="12" className="">
        <IntershipCard offer={job} type={type} />
      </Col>
    );
  });
};

function Accueil() {
  return (
    <div className="espace-gestion-accueil-container">
      <div className="title">
        <h4>En attente de validation</h4>
      </div>
      <Row>
        <Col sm="12" md="6" className="intership-request">
          <h6>
            <span>Demandes de stage</span>{" "}
            <FontAwesomeIcon icon={faLevelDownAlt} />
          </h6>
          <Row>{jobOfferList(jobs, 'demande')}</Row>
        </Col>
        <Col sm="12" md="6" className="intership-request">
          <h6>
            <span>Offres de stage</span>{" "}
            <FontAwesomeIcon icon={faLevelDownAlt} />
          </h6>
          <Row>{jobOfferList(jobs)}</Row>
        </Col>
      </Row>
    </div>
  );
}

export default Accueil;
