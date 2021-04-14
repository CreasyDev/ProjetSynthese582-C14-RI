import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import UserCard from "../../components/UserCard";
import {recupererDonneesUtilisateurs} from "../../../helper/crud";

const ListeDesCandidats = (utilisateurs) => {
  const candidats = utilisateurs.filter(utilisateur => utilisateur.niveauAcces === 111);
  return candidats.map((entreprise) => {
    return (
      <Col sm="12" md="4" className="mb-3">
        <UserCard utilisateur={entreprise} />
      </Col>
    );
  });
};

function Candidats() {
  const utilisateurs = recupererDonneesUtilisateurs();
  //console.log("utilisateurs : " +JSON.stringify(utilisateurs));
  return (
    <div className="espace-gestion-accueil-container">
      <div className="title">
        <h4>Liste des candidats <FontAwesomeIcon icon={faLevelDownAlt} /></h4>
      </div>
      <Row>
        <Col sm="12"  className="intership-request">
          <Row>{ListeDesCandidats(utilisateurs)}</Row>
        </Col>
      </Row>
    </div>
  );
}

export default Candidats;
