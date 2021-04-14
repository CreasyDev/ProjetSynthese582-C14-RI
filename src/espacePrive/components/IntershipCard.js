import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const OfferCard = ({ offer = undefined, type = "offre" }) => {
  if (offer.type === type) {
    const containerStyleClass = offer.type === "demande" ? "mt-2 internal-intership-request-card-container" : "mt-2 internal-intership-offer-card-container";
    return (
      <Card className={containerStyleClass}>
        <Card.Body className="card internal-intership-card-content">
          <Card.Title className="intership-header-info">
            <FontAwesomeIcon
              icon={offer.type === "demande" ? faUserGraduate : faUserTie}
            />
            <strong>{offer.titre}</strong>
          </Card.Title>
          <Card.Subtitle className="full-name">
            <label>{offer.nom}</label>
          </Card.Subtitle>
          <Card.Subtitle className="city">
            <strong>Ville : </strong>
            <label>{offer.ville}</label>
          </Card.Subtitle>
          <Card.Subtitle className="offer-owner">
            <strong>Etablissement scolaire : </strong>
            <label>{offer.secteurActivite}</label>
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
              <Button variant="danger" className="mr-3" size="sm">
                Refuser
              </Button>
              <Button variant="success" size="sm">
                Accepter
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
