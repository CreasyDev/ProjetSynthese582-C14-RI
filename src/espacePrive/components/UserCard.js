import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { supprimerUtilisateur } from "../../helper/crud";
// import { toast } from "react-toastify";

// toast.configure();

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserDeleted: false,
    };

    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  handleDeleteUser = (utilisateurId) => {
    supprimerUtilisateur(utilisateurId);
    this.setState({ isUserDeleted: true });
  };

  renderContent() {
    const utilisateur = this.props.utilisateur;
    const { isUserDeleted } = this.state;

    if (utilisateur !== undefined) {
      return (
        <Card
          className={
            isUserDeleted
              ? "utilisateur-card display-none"
              : "utilisateur-card display-block"
          }
        >
          <Card.Body className="">
            <Card.Title className="nom-prenom">
              <strong>
                {utilisateur.prenom} {utilisateur.nom}
              </strong>
            </Card.Title>
            <Card.Subtitle className="etablissement-scolaire">
              <label>
                {utilisateur.estUneEntreprise
                  ? utilisateur.nomEntreprise
                  : utilisateur.etablissementScolaire}
              </label>
            </Card.Subtitle>
            <Card.Subtitle className="city">
              <label>{utilisateur.ville}</label>
            </Card.Subtitle>
            <div>
              <ButtonGroup className="mr-2 float-center">
                <Button
                  variant="light"
                  className="mr-3"
                  size="sm"
                  href={`/espace-prive/${
                    utilisateur.estUneEntreprise
                      ? "modifier-entreprise"
                      : "modifier-candidat"
                  }/${utilisateur.id}`}
                >
                  <FontAwesomeIcon icon={faEdit} color="green" /> Modifier
                </Button>
                <Button
                  variant="light"
                  size="sm"
                  onClick={() => this.handleDeleteUser(utilisateur.id)}
                >
                  <FontAwesomeIcon icon={faTimesCircle} color="red" /> Supprimer
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      );
    }
    return null;
  }

  render() {
    return this.renderContent();
  }
}

export default UserCard;
