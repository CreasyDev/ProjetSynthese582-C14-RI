import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import UserCard from "../../components/UserCard";
import utilisateurs from "../../../data/utilisateurs";

const ListeDesEntreprises = (jobs, type) => {
  const entreprises = utilisateurs.filter(utilisateur => utilisateur.niveauAcces === 333);
  return entreprises.map((entreprise) => {
    return (
      <Col sm="12" md="4" className="mb-3">
        <UserCard utilisateur={entreprise} />
      </Col>
    );
  });
};

function Entreprises() {
  return (
    <div className="espace-gestion-accueil-container">
      <div className="title">
        <h4>Liste des Entreprises <FontAwesomeIcon icon={faLevelDownAlt} /></h4>
      </div>
      <Row>
        <Col sm="12"  className="intership-request">
          <Row>{ListeDesEntreprises(utilisateurs)}</Row>
        </Col>
      </Row>
    </div>
  );
}

export default Entreprises;
