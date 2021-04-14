import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";

const OfferCard = ({ offer = undefined, type = "offre" }) => {
  const action = offer.type === "offre" ? "Postuler" : "Contacter le candidat";
  if (offer.type === type) {
    return (
      <Card className="mt-4">
        <Card.Body className="card standard-card-style">
          <Card.Title className="">
            <strong>{offer.titre}</strong>
          </Card.Title>
          <Card.Subtitle className="city">{offer.ville}</Card.Subtitle>
          <Card.Subtitle className="activity-field">
            {offer.secteurActivite}
          </Card.Subtitle>
          <Card.Text className="">
            {offer.description.slice(0, 150)}{" "}
            {offer.description.length > 150 ? "..." : ""}
          </Card.Text>
          <ButtonGroup size="sm" className="card-button">
            <Button variant="link">Détails</Button>
            <Button variant="info">{action}</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }
  return null;
};

export default OfferCard;
