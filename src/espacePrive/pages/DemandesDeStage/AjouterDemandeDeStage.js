import React from "react";
import { Badge, ButtonGroup, Button, Form, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import FormInputFeedBackControl from "../../../components/FormInputFeedBackControl";
import utilisateurs from "../../../data/utilisateurs";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
// import { toast } from "react-toastify";

// toast.configure();

class AjouterDemandeDeStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ficheCandidatId: null,
      isFormValidated: false,
      nom: "",
      prenom: "",
      etablissementScolaire: "",
      programmeDeFormation: "",
      courriel: "",
      telephone: "",
      ville: "",
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const ficheCandidatId = this.props.match.params.id;
    const utilisateur = utilisateurs[ficheCandidatId - 1];

    if (!ficheCandidatId) {
    } else {
      this.setState({ ficheCandidatId });
      try {
        const {
          nom,
          prenom,
          etablissementScolaire,
          programmeDeFormation,
          courriel,
          telephone,
          ville,
        } = utilisateur;
        this.setState({
          nom,
          prenom,
          etablissementScolaire,
          programmeDeFormation,
          courriel,
          telephone,
          ville,
        });
      } catch (error) {
        console.error("error : " + error);
        /* toast.error("Error : aucun identifiant correspondant trouvé.", {
          position: toast.POSITION.TOP_RIGHT,
        });*/
      }
    }
  }

  setFormValidated = (isValidated) => {
    this.setState({ isFormValidated: isValidated });
  };

  handleFormInput = (e, inputId) => {
    switch (inputId) {
      case "nom":
        this.setState({ nom: e.target.value });
        break;
      case "prenom":
        this.setState({ prenom: e.target.value });
        break;
      case "etablissementScolaire":
        this.setState({ etablissementScolaire: e.target.value });
        break;
      case "programmeDeFormation":
        this.setState({ programmeDeFormation: e.target.value });
        break;
      case "courriel":
        this.setState({ courriel: e.target.value });
        break;
      case "telephone":
        this.setState({ telephone: e.target.value });
        break;
      case "ville":
        this.setState({ ville: e.target.value });
        break;
      default:
        return;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setFormValidated(true);
  };

  renderHeader() {
    return (
      <>
        <div className="title">
          <h4>
            Formulaire de demande de stage{" "}
            <FontAwesomeIcon icon={faLevelDownAlt} />
          </h4>
          <Nav.Link href="/espace-prive/demandes-de-stage">
            <Badge variant="dark">
              Retour à la liste des demandes de stage
            </Badge>
          </Nav.Link>
        </div>
      </>
    );
  }

  renderForm() {
    const {
      titre,
      programesSuivi,
      autresFormations,
      competencesAcquises,
      descriptionPoste,
      ville,
      dateDebut,
      dateFin,
      heuresParSemaine,
      dureeStage,
      dateParution,
      autresInformations,
    } = this.state;

    return (
      <Form
        className="modification-fiche-candidat-formulaire"
        noValidate
        validated={this.state.isFormValidated}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label>Titre de la demande de stage*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrer le titre de la demande de stage"
            value={titre}
            onChange={(e) => this.handleFormInput(e, "titre")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un titre valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Programmes suivi (formation)*</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={2}
            placeholder="Entrer des programmes ou formations suivi"
            value={programesSuivi}
            onChange={(e) => this.handleFormInput(e, "programesSuivi")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer des programmes valides." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autres formations</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Autres formations"
            value={autresFormations}
            onChange={(e) => this.handleFormInput(e, "autresFormations")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Compétences acquises*</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={2}
            placeholder="Compétences acquises"
            value={competencesAcquises}
            onChange={(e) => this.handleFormInput(e, "competencesAcquises")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description du poste recherché*</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Description du poste recherché"
            value={descriptionPoste}
            onChange={(e) => this.handleFormInput(e, "descriptionPoste")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ville*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer la ville"
            required
            value={ville}
            onChange={(e) => this.handleFormInput(e, "ville")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer une ville valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de début*</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de début"
            required
            value={dateDebut}
            onChange={(e) => this.handleFormInput(e, "dateDebut")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez une date de début valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de fin*</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de fin"
            required
            value={dateFin}
            onChange={(e) => this.handleFormInput(e, "dateFin")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez une date de fin valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre d'heure par semaine*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nombre d'heure par semaine"
            required
            value={heuresParSemaine}
            onChange={(e) => this.handleFormInput(e, "heuresParSemaine")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un nombre d'heures par semaine valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type de stage*</Form.Label>
          <Form.Control as="select">
            <option value="full-time">Temps plein</option>
            <option value="temps-partiel">Temps partiel</option>
            <option value="alternance">Alternance travail études</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Durée de stage en semaine</Form.Label>
          <Form.Control
            type="number"
            placeholder="Durée de stage en semaine"
            value={dureeStage}
            onChange={(e) => this.handleFormInput(e, "dureeStage")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un nombre d'heures par semaine valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rémunération</Form.Label>
          <Form.Control as="select">
            <option value="oui">Oui</option>
            <option value="non">Non</option>
            <option value="a-la-discretion-de-entreprise">
              À la discrétion de l'entreprise
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de parution</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de parution"
            value={dateParution}
            onChange={(e) => this.handleFormInput(e, "dateParution")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer une date de parution valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autres informations</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Autres informations"
            value={autresInformations}
            onChange={(e) => this.handleFormInput(e, "autresInformations")}
          />
        </Form.Group>
        <div className="float-right">
          <ButtonGroup size="sm" className="card-button">
            <Button variant="light" className="mr-2" href="/espace-prive/demandes-de-stage">
              Annuler
            </Button>
            <Button variant="info" type="submit" onClick={this.handleSubmit}>
              Ajouter
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    );
  }

  renderContent() {
    return (
      <div className="fiche-candidat">
        {this.renderHeader()}
        {this.renderForm()}
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default withRouter(AjouterDemandeDeStage);
