import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUserGraduate,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const OfferCard = ({ offer = undefined, type = "offre" }) => {
  if (offer.type === type) {
    const containerStyleClass =
      offer.type === "demande"
        ? "mt-2 internal-intership-request-card-container"
        : "mt-2 internal-intership-offer-card-container";
    return (
      <Card className={containerStyleClass}>
        <Card.Body className="card internal-intership-card-content">
          <Card.Title className="intership-header-info">
            <FontAwesomeIcon icon={faUserGraduate} />
            <strong>{offer.titre}</strong>
            <span className="float-right">
              <span>Publié le : </span>
              <span>{offer.dateParution}</span>
            </span>
          </Card.Title>
          <Card.Subtitle className="full-name">
            <span className="float-left">
              <label>{offer.nom}</label>
            </span>
            <span className="float-right">
              <strong>Formation : </strong>
              <label>{offer.programmesSuivi}</label>
            </span>
          </Card.Subtitle>
          <Card.Subtitle className="city">
            <span className="float-left">
              <strong>Ville : </strong>
              <label>{offer.ville}</label>
            </span>
            <span className="float-right">
              <strong>Début : </strong>
              <label>{offer.dateDebut}</label>
            </span>
          </Card.Subtitle>
          <Card.Subtitle className="offer-owner">
            <span className="float-left">
              <strong>Etablissement scolaire : </strong>
              <label>{offer.secteurActivite}</label>
            </span>
            <span className="float-right">
              <strong>Fin : </strong>
              <label>{offer.dateFin}</label>
            </span>
          </Card.Subtitle>
          <Card.Text className="intership-description">
            {offer.description.slice(0, 150)}{" "}
            {offer.description.length > 150 ? "..." : ""}
          </Card.Text>
          <div>
            <ButtonGroup className="float-left">
              <Button variant="info" size="sm">
                Détails
              </Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2 float-right">
              <Button variant="light" className="mr-3" size="sm">
                <FontAwesomeIcon icon={faEdit} color="green" /> Modifier
              </Button>
              <Button variant="light" size="sm">
                <FontAwesomeIcon icon={faTimesCircle} color="red" /> Supprimer
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    );
  }
  return null;
};

export default OfferCard;
